import path from "path";
import { fileURLToPath } from "url";

export const dirname = path.dirname(fileURLToPath(import.meta.url));

export const DIRECTORIES = {
  COMPONENTS: path.join(dirname, "../src/components"),
  ICONS: path.join(dirname, "../src/assets/icons"),
  HELPERS: path.join(dirname, "../src/helpers"),
  TYPES: path.join(dirname, "../src/types"),
};
