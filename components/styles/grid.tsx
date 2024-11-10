import { motion } from "framer-motion";

interface GridProps {
  key?: number;
  className?: string;
  children: React.ReactNode;
}

export function Grid({ children }: GridProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
  );
}

export function GridElement({
  key,
  className,
  children,
}: GridProps): JSX.Element {
  return (
    <motion.div
      key={key}
      className={`bg-white rounded-lg shadow-lg ${className || ""}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "sping", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}
