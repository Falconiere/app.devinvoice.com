import { cn } from "@/lib/utils";

const AnimatedLogo = () => (
  <span
    className={cn(
      "text-2xl   font-extrabold  bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent"
    )}
  >
    {"<DevInVoice/>"}
  </span>
);
export { AnimatedLogo };
