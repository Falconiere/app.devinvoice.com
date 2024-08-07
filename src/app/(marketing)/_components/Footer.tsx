import { webLinks } from "@/app/(marketing)/_utils/webLinks";
import { TextLogo } from "@/domains/components/TextLogo";
import Link from "next/link";

const Footer = () => (
  <footer className="p-8 flex flex-col items-center gap-4">
    <nav>
      <ul className="flex justify-between">
        {webLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover:underline font-semibold text-xl p-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <span className="font-bold">
      © {new Date().getFullYear()} <TextLogo /> All rights reserved.
    </span>
  </footer>
);

export { Footer };
