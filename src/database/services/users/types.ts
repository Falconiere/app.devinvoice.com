import { userProfile } from "@/database/schemas/userProfile";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";


export const selectUserSchema = createSelectSchema(userProfile);
export type UserProfile = z.infer<typeof selectUserSchema>;

export const updateUserSchema = createInsertSchema(userProfile,{
  email: z.string().email({ message: "Invalid email"}),
  firstName: z.string().min(3,{ message: "First name must be at least 3 characters" }),
  lastName: z.string().min(3, { message: "Last name must be at least 3 characters" }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UpdateUserProfile = z.infer<typeof selectUserSchema>;