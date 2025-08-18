import mergeClasses from "../helpers/mergeClasses";

export enum LinearProgressSizes {
  "3xs" = "3xs",
  "2xs" = "2xs",
}

type LinearProgressProps = {
  children?: React.ReactNode;
  className?: string;
  size?: LinearProgressSizes;
  value: number;
};

export const LinearProgress = ({
  className,
  value,
  size = LinearProgressSizes["2xs"],
  children,
}: LinearProgressProps) => (
  <div className={mergeClasses("moon-linear-progress-wrapper", className)}>
    {children}
    <progress
      value={String(value)}
      max="100"
      className={mergeClasses(
        "moon-linear-progress",
        size !== LinearProgressSizes["2xs"] && `moon-linear-progress-${size}`
      )}
    ></progress>
  </div>
);
