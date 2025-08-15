import mergeClasses from "../helpers/mergeClasses";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type"> & {
  label?: string;
};

export const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  if (label) {
    return (
      <div className={mergeClasses("moon-checkbox-wrapper", className)}>
        <input type="checkbox" className="moon-checkbox" {...props} />
        {label && <label htmlFor={props.id}>{label}</label>}
      </div>
    );
  }
  return (
    <input
      type="checkbox"
      className={mergeClasses("moon-checkbox", className)}
      {...props}
    />
  );
};
