import { db } from "@/database/db";
import { business } from "@/database/schemas/business";
import type { Business } from "@/database/services/business/types";

const createBusiness = async (values: Business) => {
	return await db.insert(business).values(values).returning();
};
export { createBusiness };
