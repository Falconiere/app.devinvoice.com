import { Section } from "@/app/(marketing)/_components/Section";
import { Button } from "@/components/ui/button";
import { TextLogo } from "@/domains/components/TextLogo";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section className="items-center justify-center flex flex-col h-[calc(100vh-210px)] text center relative">
        <h1 className="font-black text-7xl">
          Welcome to <TextLogo />
        </h1>
        <p className="text-3xl font-semibold pt-1 pb-4">
          Create and send invoices in minutes, so you can get back to doing what
          you love.
        </p>
        <Button asChild className="text-2xl h-11 px-10 font-semibold">
          <Link href="/auth/login">Get Started</Link>
        </Button>
      </Section>
      {/* <Section className="gap-4" id="why">
        <div className="grid gap-1 col-span-2">
          <h2 className="font-black text-4xl">Why Choose Us?</h2>
          <p className="text-2xl">
            Create and send invoices in minutes, so you can get back to doing
            what you love.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 col-span-2 ">
          <HomeCard
            title="Customer Data & Billing History"
            description={
              "Keep track of all your customer data and billing history in one place. Easily access past invoices, payments, and customer information."
            }
          />
          <HomeCard
            title="Accounting Made Simple"
            description={
              <>
                <TextLogo /> makes it easy to keep track of your finances. With
                customizable reports and easy-to-use tools, you'll always know
                where your business stands
              </>
            }
          />
          <HomeCard
            title="Automate With Recurring Invoices"
            description={
              <>
                Set up recurring invoices and let DevInvoice do the work for
                you. Create a schedule, choose your billing cycle, and let{" "}
                <TextLogo /> take care of the rest.
              </>
            }
          />
        </div>
      </Section> */}
    </>
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
