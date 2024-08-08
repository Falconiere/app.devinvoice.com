import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
  id?: string;
};
const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      className={cn("grid grid-cols-2 w-full p-2 max-w-6xl mx-auto", className)}
      id={id}
    >
      {children}
    </section>
  );
};

export { Section };
