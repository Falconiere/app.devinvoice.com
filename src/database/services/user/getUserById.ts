import { db } from "@/database/db";
import { userProfile } from "@/database/schemas/userProfile";
import { eq } from "drizzle-orm";

const getUserById = async (id: string) => {
	const profile = await db.query.userProfile.findFirst({
		where: eq(userProfile.id, id),
		with: {
			businesses: true,
		},
	});
	return profile;
};

export { getUserById };
