import { env } from '@/app/_constants/env';
import jwt, { type JwtPayload } from 'jsonwebtoken';

const checkToken = (req: Request) => {
  const token = req.headers.get("Authorization") ?? "";
  const user = jwt.verify(token, env.SUPABASE_JWT_SECRET) as JwtPayload;
  if(!user) {
    throw new Error("Invalid Token");
  }
}

const mutate = async (request:Request, next:(payload:never)=> void) => {
  try {
    checkToken(request);
    const payload = await request.json();
    return next(payload as never) 
  } catch (error) {
    return new Response(JSON.stringify({ message: "Unauthorized", error }), {
      status: 401,
    });
  }
}

const apiMiddleware = {
  patch: mutate,
  post: mutate,
  get: async (request:Request, next:(payload:never)=> void) => {
    try {
      checkToken(request);
      return next({} as never);
    } catch (error) {
      return new Response(JSON.stringify({ message: "Unauthorized", error }), {
        status: 401,
      });
    }
  }
}
export {   apiMiddleware }