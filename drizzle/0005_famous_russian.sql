CREATE TABLE IF NOT EXISTS "business" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" text,
	"fistName" text NOT NULL,
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
	"userId" uuid NOT NULL,
	"createdAt" text DEFAULT now(),
	"updatedAt" text DEFAULT now(),
	CONSTRAINT "business_id_unique" UNIQUE("id")
);

ALTER TABLE public.business ENABLE ROW LEVEL SECURITY;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "business" ADD CONSTRAINT "business_userId_user_profile_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user_profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
