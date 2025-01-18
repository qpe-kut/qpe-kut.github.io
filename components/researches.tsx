import { researches } from "@/data/researches";

import Research from "@/components/research";

export default function Researches(): JSX.Element {
  return (
    <div className='space-y-6'>
      {researches.map((research, index: number) => (
        <Research
          key={index}
          title={research.title}
          subtitle={research.subtitle}
          author={research.author}
          supervisor={research.supervisor}
          /*
          background={research.background}
          purpose={research.purpose}
          method={research.method}
          result={research.result}
          conclusion={research.conclusion}
          */
        />
      ))}
    </div>
  );
}
