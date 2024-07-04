ALTER TABLE "business" ALTER COLUMN "createdAt" SET DATA TYPE timestamp USING "createdAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "business" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp USING "updatedAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "createdAt" SET DATA TYPE timestamp USING "createdAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp USING "updatedAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "invoice" ALTER COLUMN "createdAt" SET DATA TYPE timestamp USING "createdAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "invoice" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp USING "updatedAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "invoiceItem" ALTER COLUMN "createdAt" SET DATA TYPE timestamp USING "createdAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "invoiceItem" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp USING "updatedAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "user_profile" ALTER COLUMN "createdAt" SET DATA TYPE timestamp USING "createdAt"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "user_profile" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp USING "updatedAt"::timestamp with time zone;--> statement-breakpoint


ALTER TABLE "invoice" ADD COLUMN "date" date NOT NULL;
ALTER TABLE "invoice" ALTER COLUMN "dueDate" SET DATA TYPE date USING "dueDate"::date;--> statement-breakpoint
