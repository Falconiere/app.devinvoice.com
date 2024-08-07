import { webLinks } from "@/app/(marketing)/_utils/webLinks";
import { TextLogo } from "@/domains/components/TextLogo";
import Link from "next/link";

const Header = () => (
  <header className="bg-white border-b-1 border-gray-100 p-2 flex items-center justify-center  top-0 left-0 w-full sticky">
    <nav className="flex items-center justify-between w-full max-w-6xl">
      <Link href="/" className="font-black">
        <TextLogo /> beta
      </Link>
      <ul className="flex p-4">
        {webLinks.map(({ label, href }) => (
          <li key={href + label}>
            <Link href={href} className="hover:underline p-4 font-semibold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export { Header };
