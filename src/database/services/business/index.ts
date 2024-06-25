import { db } from "@/database/db";
import { business } from "@/database/schemas/business";
import type { Business } from "@/database/services/business/types";
import { eq } from "drizzle-orm";

const createBusiness = async (values: Business) => {
	return await db.insert(business).values(values).returning();
};

const updateBusiness = async (id: string, values: Business) => {
	return await db
		.update(business)
		.set(values)
		.where(eq(business.id, id))
		.returning();
};
export { createBusiness, updateBusiness };
