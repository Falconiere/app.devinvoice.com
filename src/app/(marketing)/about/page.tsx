import { Section } from "@/app/(marketing)/_components/Section";
import { TextLogo } from "@/domains/components/TextLogo";

const AboutPage = () => (
  <>
    <Section className="grid-cols-0 gap-4 text-2xl">
      <h1 className="text-4xl font-extrabold">About</h1>
      <p>
        <TextLogo /> is an invoice generator focused on small businesses and
        freelancers. We aim to provide a simple and easy-to-use platform to help
        you create and send invoices in minutes.
      </p>
      <p>
        We understand that managing your business can be overwhelming, so we
        want to help you get back to doing what you love. We offer a variety of
        features to help you manage your business, including:
      </p>
      <p>
        <ul>
          <li>Customizable invoices</li>
          <li>Recurring invoices</li>
          <li>Payment tracking</li>
          <li>Customer management</li>
          <li>Reporting</li>
        </ul>
      </p>
      <p>
        We are constantly working to improve our platform and add new features
        to help you manage your business more efficiently. We are always open to
        feedback and suggestions, so please don't hesitate to reach out to us
        with any questions or comments.
      </p>
    </Section>
  </>
);
export default AboutPage;
