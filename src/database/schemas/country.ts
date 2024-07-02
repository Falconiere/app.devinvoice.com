import { countryCodes } from "@/data/countries";
import { pgEnum } from "drizzle-orm/pg-core";

export const countryEnum = pgEnum(
	"countries",
	countryCodes as [string, string],
);
