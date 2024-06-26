import { userProfile } from "@/database/schemas/userProfile";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import type { Business } from "@/database/services/business/types";
export const selectUserSchema = createSelectSchema(userProfile);
export type UserProfile = z.infer<typeof selectUserSchema> & {
	businesses?: Business[];
};

export const updateUserSchema = createInsertSchema(userProfile, {
	email: z.string().email({ message: "Invalid email" }),
	firstName: z
		.string()
		.min(3, { message: "First name must be at least 3 characters" }),
	lastName: z
		.string()
		.min(3, { message: "Last name must be at least 3 characters" }),
	phone: z
		.string()
		.min(10, { message: "Phone number must be at least 10 characters" }),
	country: z.string({ message: "Country is required" }),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export type UpdateUserProfile = z.infer<typeof selectUserSchema>;
