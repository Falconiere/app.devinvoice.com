ALTER TABLE "invoice" DROP CONSTRAINT "invoice_invoiceNumber_unique";--> statement-breakpoint
ALTER TABLE "invoice" ADD COLUMN "businessId" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "invoice" ADD COLUMN "clientId" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "invoiceItem" ADD COLUMN "invoiceId" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoice" ADD CONSTRAINT "invoice_businessId_business_id_fk" FOREIGN KEY ("businessId") REFERENCES "public"."business"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoice" ADD CONSTRAINT "invoice_clientId_client_id_fk" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoiceItem" ADD CONSTRAINT "invoiceItem_invoiceId_invoice_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."invoice"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
