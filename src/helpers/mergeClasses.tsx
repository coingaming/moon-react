type ArgsType = string | number | Record<string, string> | false | undefined;

function toVal(value: ArgsType): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toVal).filter(Boolean).join(" ");
  }

  if (typeof value === "object" && value !== null) {
    return Object.keys(value)
      .filter((key) => value[key])
      .join(" ");
  }

  return "";
}

export function mergeClasses(...args: ArgsType[]): string {
  return args.map(toVal).filter(Boolean).join(" ");
}

export default mergeClasses;
