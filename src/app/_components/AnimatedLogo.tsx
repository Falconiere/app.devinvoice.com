import { cn } from "@/lib/utils";

const textClasses = `
bg-gradient-to-r 
from-indigo-500 
via-violet-600 
to-blue-500 
bg-clip-text 
text-transparent
px-4 py-2
text-center
bg-white
`;
const AnimatedLogo = () => (
  <div className={cn(textClasses, "text-2xl font-extrabold")}>
    {"<DevInVoice/>"}
  </div>
);
export { AnimatedLogo };
