ALTER TABLE "client" DROP CONSTRAINT "client_businessId_user_profile_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "client" ADD CONSTRAINT "client_businessId_business_id_fk" FOREIGN KEY ("businessId") REFERENCES "public"."business"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
