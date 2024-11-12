import { domains } from "@/data/domains";

import { Section, SectionTitle } from "@/components/styles/section";
import { Grid, GridElement } from "@/components/styles/grid";

interface DomainType {
  title: string;
  description: string;
}

export default function Domain(): JSX.Element {
  return (
    <Section>
      <SectionTitle>研究領域</SectionTitle>
      <Grid>
        {domains.map(
          (item: DomainType, index: number): JSX.Element => (
            <GridElement key={index} className="p-6">
              <div className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </div>
              <div className="text-slate-600">{item.description}</div>
            </GridElement>
          ),
        )}
      </Grid>
    </Section>
  );
}
