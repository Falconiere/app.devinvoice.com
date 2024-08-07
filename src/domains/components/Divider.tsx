import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => (
  <div className={cn("border-t border-gray-200", className)} />
);

export { Divider };
