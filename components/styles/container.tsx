interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({
  className,
  children,
}: ContainerProps): JSX.Element {
  return (
    <div className={`container max-w-xl mx-auto space-y-20 ${className || ""}`}>
      {children}
    </div>
  );
}
