import mergeClasses from "../helpers/mergeClasses";

export type PlaceholderProps = { className?: string };

export const Placeholder = ({ className }: PlaceholderProps) => (
  <div className={mergeClasses("moon-placeholder", className)} />
);
