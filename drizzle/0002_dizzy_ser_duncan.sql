DO $$ BEGIN
 CREATE TYPE "public"."countries" AS ENUM('US', 'BR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
