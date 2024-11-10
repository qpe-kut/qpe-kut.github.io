interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps): JSX.Element {
  return <div className="mx-auto space-y-8">{children}</div>;
}

export function SectionTitle({ children }: SectionProps): JSX.Element {
  return <div className="font-bold text-2xl text-center">{children}</div>;
}

export function SectionSubtitle({ children }: SectionProps): JSX.Element {
  return <div className="text-lg font-bold">{children}</div>;
}
