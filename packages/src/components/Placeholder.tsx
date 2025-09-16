import mergeClasses from "../helpers/mergeClasses";

type PlaceholderProps = { className?: string };

const Placeholder = ({ className }: PlaceholderProps) => (
  <div className={mergeClasses("moon-placeholder", className)} />
);

Placeholder.displayName = "Placeholder";

export default Placeholder;
