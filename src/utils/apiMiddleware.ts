import { env } from "@/app/_constants/env";
import jwt, { type JwtPayload } from "jsonwebtoken";

type User = {
	sub: string;
};

type Next = (user: User, payload: never) => void;

const checkToken = (req: Request) => {
	const token = req.headers.get("Authorization") ?? "";
	const user = jwt.verify(token, env.SUPABASE_JWT_SECRET) as JwtPayload;
	if (!user) {
		throw new Error("Invalid Token");
	}
	return user as User;
};

const mutate = async (request: Request, next: Next) => {
	try {
		const user = checkToken(request);
		const payload = await request.json();
		return next(user, payload as never);
	} catch (error) {
		return new Response(JSON.stringify({ message: "Unauthorized", error }), {
			status: 401,
		});
	}
};

const apiMiddleware = {
	patch: mutate,
	post: mutate,
	get: async (request: Request, next: Next) => {
		try {
			const user = checkToken(request);
			return next(user, {} as never);
		} catch (error) {
			return new Response(JSON.stringify({ message: "Unauthorized", error }), {
				status: 401,
			});
		}
	},
};
export { apiMiddleware };
