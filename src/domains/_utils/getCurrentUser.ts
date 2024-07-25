import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const getCurrentUser = async () => {
	const client = createClientComponentClient();
	const { data, error } = await client.auth.getUser();
	if (error) throw new Error(error.message);
	const { user } = data;
	return user;
};
export { getCurrentUser };
