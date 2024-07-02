CREATE TABLE IF NOT EXISTS "client" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" text,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL,
	"website" text,
	"addressLine1" text,
	"addressLine2" text,
	"city" text,
	"state" text,
	"zipCode" text,
	"country" "countries" DEFAULT 'US' NOT NULL,
	"phone" text,
	"notes" text,
	"businessId" uuid NOT NULL,
	"createdAt" text DEFAULT now(),
	"updatedAt" text DEFAULT now(),
	CONSTRAINT "client_id_unique" UNIQUE("id")
);

ALTER TABLE public.client ENABLE ROW LEVEL SECURITY;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoice" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"invoiceNumber" text NOT NULL,
	"dueDate" text NOT NULL,
	"description" text,
	"createdAt" text DEFAULT now(),
	"updatedAt" text DEFAULT now(),
	CONSTRAINT "invoice_id_unique" UNIQUE("id"),
	CONSTRAINT "invoice_invoiceNumber_unique" UNIQUE("invoiceNumber")
);

ALTER TABLE public.invoice ENABLE ROW LEVEL SECURITY
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoiceItem" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"description" text,
	"quantity" integer,
	"price" numeric,
	"createdAt" text DEFAULT now(),
	"updatedAt" text DEFAULT now(),
	CONSTRAINT "invoiceItem_id_unique" UNIQUE("id")
);

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "client" ADD CONSTRAINT "client_businessId_user_profile_id_fk" FOREIGN KEY ("businessId") REFERENCES "public"."user_profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;




