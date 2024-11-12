import Researches from "@/components/researches";

import { Container } from "@/components/styles/container";
import { Section, SectionTitle } from "@/components/styles/section";

export default function ResearchPage(): JSX.Element {
  return (
    <div className="my-20">
      <Container>
        <Section>
          <SectionTitle>Research</SectionTitle>
          <Researches />
        </Section>
      </Container>
    </div>
  );
}
