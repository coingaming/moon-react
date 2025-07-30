type ArgsType = string | number | false | undefined;

function toVal(value: ArgsType): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toVal).filter(Boolean).join(" ");
  }

  return "";
}

export function mergeClasses(...args: ArgsType[]): string {
  return args.map(toVal).filter(Boolean).join(" ");
}

export default mergeClasses;
