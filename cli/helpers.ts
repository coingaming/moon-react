import { execa } from "execa";
import prompts from "prompts";

const MOON_UI_PACKAGE = "@heathmont/moon-ui";
const PROMP_MOON_UI = "We are installing css components, do you agree?";

export const promptBeforeInstalation = async (
  message: string,
  callback: () => Promise<boolean>
) => {
  const response = await prompts({
    type: "confirm",
    name: "agree",
    message,
    initial: true,
  });

  if (!response?.agree) {
    return false;
  }

  return await callback();
};

export async function initMoonCss(cssPath?: string | null): Promise<boolean> {
  const command = cssPath
    ? [MOON_UI_PACKAGE, "--add-components", "--outputFolder", cssPath]
    : [MOON_UI_PACKAGE, "--add-components"];

  let output = false;

  return promptBeforeInstalation(PROMP_MOON_UI, async (): Promise<boolean> => {
    try {
      await execa("npx", command, {
        stdio: "inherit",
      });
      return true;
    } catch (err) {
      console.error("❌ Failed to install Moon CSS package:", err);
      return false;
    }
  });
}
