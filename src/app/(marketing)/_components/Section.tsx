import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
};
const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={cn("grid grid-cols-2 w-full p-4 max-w-6xl mx-auto", className)}
    >
      {children}
    </section>
  );
};

export { Section };
