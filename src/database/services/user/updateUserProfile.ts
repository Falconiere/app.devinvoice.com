import { db } from "@/database/db";
import { userProfile } from "@/database/schemas/userProfile";
import type {
	UpdateUserProfile,
	UserProfile,
} from "@/database/services/user/types";
import { eq } from "drizzle-orm";

const updateUserProfile = async (
	id: string,
	payload: UpdateUserProfile,
): Promise<UserProfile> => {
	const response = await db
		.update(userProfile)
		.set(payload)
		.where(eq(userProfile.id, id))
		.returning({
			id: userProfile.id,
			email: userProfile.email,
			firstName: userProfile.firstName,
			phone: userProfile.phone,
			country: userProfile.country,
			lastName: userProfile.lastName,
			createdAt: userProfile.createdAt,
			updatedAt: userProfile.updatedAt,
		});
	return response?.[0];
};

export { updateUserProfile };
