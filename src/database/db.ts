
import { env } from '@/app/_constants/env';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

let connection: postgres.Sql;
if (process.env.NODE_ENV === "production") {
  connection = postgres(env.DATABASE_URL, { prepare: false });
} else {
  const globalConnection = global as typeof globalThis & {
    connection: postgres.Sql;
  };
  if (!globalConnection.connection) {
    globalConnection.connection = postgres(env.DATABASE_URL, {
      prepare: false,
    });
  }
  connection = globalConnection.connection;
}


const db = drizzle(connection,{
  logger: process.env.NODE_ENV === "development",
});
export { db }