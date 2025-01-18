import { Container } from "@/components/styles/container";
import { Section, SectionTitle } from "@/components/styles/section";
import ContactForm from "@/components/contact-form";

export default function ContactPage(): JSX.Element {
  return (
    <div className="my-20">
      <Container>
        <Section>
          <SectionTitle>Contact</SectionTitle>
          <ContactForm />
        </Section>
      </Container>
    </div>
  );
}
