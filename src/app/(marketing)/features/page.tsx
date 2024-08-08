import { Section } from "@/app/(marketing)/_components/Section";

const FeaturesPage = () => {
  return (
    <>
      <div className="p-10  items-center justify-center flex flex-col bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <h1 className="font-extrabold text-5xl pb-2">
          Create Invoices, Mange Customers and Get Paid
        </h1>
        <p className="text-3xl font-semibold">
          Simple invoicing software for small businesses and freelancers.
        </p>
      </div>
      <Section className="pt-10">
        <div className="flex flex-col col-span-2">
          <h2 className="font-extrabold text-4xl">Create and send Invoices</h2>
          <p className="text-xl">
            Create and send invoices in minutes. You can easily customize your
            invoices, add your logo, and send them to your clients.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-1 col-span-2">
          <h2 className="font-extrabold text-4xl">Manager your clients</h2>
          <p className="text-xl">
            Keep all your client information in one place. You can easily access
            past invoices, payments, and customer information.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-1 col-span-2">
          <h2 className="font-extrabold text-4xl">Automate invoices</h2>
          <p className="text-xl">
            Set up recurring invoices and let us do the work for you. Create a
            schedule, choose your billing cycle, and let us take care of the
            rest.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-1 col-span-2">
          <h2 className="font-extrabold text-4xl">Report</h2>
          <p className="text-xl">
            Get insights into your business with customizable reports. You can
            easily track your finances and know where your business stands.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-1 col-span-2">
          <h2 className="font-extrabold text-4xl">Track your bills</h2>
          <p className="text-xl">
            Keep track of all your bills in one place. You can easily access
            past bills, payments, and vendor information
          </p>
        </div>
      </Section>
    </>
  );
};

export default FeaturesPage;
