
import { env } from '@/app/_constants/env';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres(env.NEXT_PUBLIC_DATABASE_URL, { prepare: false })
const db = drizzle(client);
export { db, client }