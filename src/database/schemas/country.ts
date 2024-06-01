import { countries } from '@/data/countries';
import { pgEnum } from 'drizzle-orm/pg-core';
const countriesCodes = countries.map((country) => country.code)
export const countryEnum = pgEnum("countries", countriesCodes as [string, string]);