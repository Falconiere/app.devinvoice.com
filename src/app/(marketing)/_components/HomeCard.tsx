import type { ReactNode } from "react";

type HomeCardProps = {
  title: string;
  description: string | ReactNode;
};
const HomeCard = ({ title, description }: HomeCardProps) => (
  <div className="shadow-md p-4 grid gap-2">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);

export { HomeCard };
