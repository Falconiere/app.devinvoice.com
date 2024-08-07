import { cn } from "@/lib/utils";

const TextLogo = () => (
  <span
    className={cn(
      "font-black bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent"
    )}
  >
    {"<DevInVoice/>"}
  </span>
);
export { TextLogo };
