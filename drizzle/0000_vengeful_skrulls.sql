CREATE TABLE IF NOT EXISTS "user_profile" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"firstName" text,
	"lastName" text,
	"email" text NOT NULL,
	"createdAt" text DEFAULT now(),
	"updatedAt" text DEFAULT now(),
	CONSTRAINT "user_profile_id_unique" UNIQUE("id"),
	CONSTRAINT "user_profile_email_unique" UNIQUE("email")
);

ALTER TABLE public.user_profile ENABLE ROW LEVEL SECURITY;

DROP TRIGGER IF EXISTS on_auth_user_created on auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE FUNCTION public.handle_new_user()
RETURNS trigger
AS $$

BEGIN
  INSERT INTO public.user_profile (email,id)
  VALUES (new.email,new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY definer;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users FOR each ROW
  EXECUTE PROCEDURE public.handle_new_user();