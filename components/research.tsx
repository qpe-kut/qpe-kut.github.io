import { GridElement } from "@/components/styles/grid";

interface ResearchProps {
  title: string;
  subtitle?: string;
  author: string;
  supervisor: string;
  //  background: string;
  //  purpose: string;
  //  method: string;
  //  result: string;
  //  conclusion: string;
}

export default function Research({
  title,
  subtitle,
  author,
  supervisor,
}: //  background,
//  purpose,
//  method,
//  result,
//  conclusion,
ResearchProps): JSX.Element {
  return (
    <GridElement className="p-4">
      <div className="font-bold text-lg">{title}</div>
      <div className="">{subtitle}</div>
      <div className="flex space-x-4 text-sm mt-2">
        <div>著者: {author}</div>
        <div>指導教員: {supervisor}</div>
      </div>
    </GridElement>
  );
}
