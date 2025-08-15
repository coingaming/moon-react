import mergeClasses from "../helpers/mergeClasses";

type RadioProps = Omit<React.ComponentProps<"input">, "type"> & {
  label?: string;
};

export const Radio = ({ className, label, ...props }: RadioProps) => {
  if (label) {
    return (
      <div className={mergeClasses("moon-radio-wrapper", className)}>
        <input type="radio" className="moon-radio" {...props} />
        {label && <label htmlFor={props.id}>{label}</label>}
      </div>
    );
  }
  return (
    <input
      type="radio"
      className={mergeClasses("moon-radio", className)}
      {...props}
    />
  );
};
