import type { ButtonVariants } from "@/components/ui/button";
import type { ReactNode } from "react";
import { create } from "zustand";

type HeaderAction = {
	label: string;
	icon?: ReactNode;
	onClick?: () => void;
	href?: string;
	component: "link" | "button";
	buttonVariant?: ButtonVariants["variant"];
	subActions?: HeaderAction[];
	className?: string;
};

type UseHeaderActionsStore = {
	actions: HeaderAction[];
	add: (actions: HeaderAction[]) => void;
	clear: () => void;
};

const useHeaderActionsStore = create<UseHeaderActionsStore>((set) => ({
	actions: [],
	add: (actions) => set(() => ({ actions })),
	clear: () => set(() => ({ actions: [] })),
}));

export { useHeaderActionsStore };
export type { HeaderAction };
