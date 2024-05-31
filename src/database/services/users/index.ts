import { eq } from "drizzle-orm";

import { db } from "@/database/db";
import { userProfile } from "@/database/schemas/userProfile";
import type { UpdateUserProfile, UserProfile } from "@/database/services/users/types";


export const getUser = async (id:string):Promise<UserProfile> => {
  const profile =await db.select().from(userProfile).where(eq(userProfile.id, id));
  return profile?.[0]
}
export const updateUserProfile = async (id:string, payload: UpdateUserProfile) => {
  return await db
    .update(userProfile).set(payload)
    .where(eq(userProfile.id, id))
    .returning({
      updatedId: userProfile.id,
    });
}