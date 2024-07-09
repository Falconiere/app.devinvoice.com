DO $$ BEGIN
 CREATE TYPE "public"."invoiceStatus" AS ENUM('DRAFT', 'UNPAID', 'PAID');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "invoice" ADD COLUMN "status" "invoiceStatus" DEFAULT 'UNPAID';