interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({
  className,
  children,
}: ContainerProps): JSX.Element {
  return (
    <div
      className={`container max-w-xl mx-auto px-4 md:px-0 space-y-20 ${className || ""}`}
    >
      {children}
    </div>
  );
}
