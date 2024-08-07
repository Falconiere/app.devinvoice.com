import { getCurrentUser } from "@/domains/utils/getCurrentUser";
import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const useCurrentUser = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	useEffect(() => {
		getCurrentUser().then((user) => {
			setCurrentUser(user);
		});
	}, []);
	return currentUser;
};

export { useCurrentUser };
