import { AnimatedLogo } from "@/domains/_components/AnimatedLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen flex flex-col gap-4">
      <header className="bg-white border-b-1 border-gray-100 p-2 flex items-center justify-center">
        <nav className="flex items-center justify-between w-full max-w-7xl">
          <AnimatedLogo />
          <ul className="flex">
            <li className="grid p-4">
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li className="grid p-4">
              <Link href="/auth/register" className="hover:underline">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-full max-w-7xl mx-auto">
        <h1 className="font-extrabold text-2xl">
          Welcome to {"<DevInVoice  />"}{" "}
        </h1>
        <p>
          Create and send invoices in minutes, so you can get back to doing what
          you love.
        </p>
      </section>
      <section className="w-full max-w-7xl mx-auto">
        <h1 className="font-extrabold text-2xl">
          Customer Data & Billing History
        </h1>
        <p>
          Keep track of all your customer data and billing history in one place.
          Easily access past invoices, payments, and customer information.
        </p>
      </section>
      <section className="w-full max-w-7xl mx-auto">
        <h1 className="font-extrabold text-2xl">Accounting Made Simple</h1>
        <p>
          DevInvoice makes it easy to keep track of your finances. With
          customizable reports and easy-to-use tools, you'll always know where
          your business stands
        </p>
      </section>
      <section className="w-full max-w-7xl mx-auto">
        <h1 className="font-extrabold text-2xl">
          Automate With Recurring Invoices
        </h1>
        <p>
          Set up recurring invoices and let DevInvoice do the work for you.
          Create a schedule, choose your billing cycle, and let DevInvoice take
          care of the rest.
        </p>
      </section>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="flex p-10 h-[100vh] w-full bg-primary">
//       <div className="w-[100%] max-w-5xl m-auto">
//         <div className="text-center z-10 m-auto space-y-4">
//           <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold  bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 bg-clip-text text-transparent">
//             {"<DevInvoice />"}
//           </h1>
//           <p className="text-lg sm:text-1xl md:text-2xl pb-4 font-extrabold text-white">
//             A simple invoicing app
//             <br />
//             built by developers for developers
//           </p>

//           <Button asChild variant="secondary">
//             <Link href="/auth/login">Get Started</Link>
//           </Button>
//         </div>
//       </div>
//     </main>
//   );
// }
