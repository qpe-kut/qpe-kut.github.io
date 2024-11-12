import { Container } from "@/components/styles/container";
import { Section, SectionTitle } from "@/components/styles/section";

export default function AboutPage(): JSX.Element {
  return (
    <div className="my-20">
      <Container>
        <Section>
          <SectionTitle>About</SectionTitle>
        </Section>
      </Container>
    </div>
  );
}
