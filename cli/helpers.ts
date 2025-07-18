import { execa, ExecaError } from "execa";
import prompts from "prompts";

const MOON_UI_PACKAGE = "@heathmont/moon-ui";
const PROMP_MOON_UI = "We are installing css components, do you agree?";
const ARGS = [
  "--outputFolder",
  "--coreFileId",
  "--componentsFileId",
  "--target",
];

export const logger = {
  nonExistingComponent: (componentName: string) => {
    console.error(`❌ '${componentName}' doesn't exist.`);
  },
  copiedComponent: (componentName: string, destPath: string) => {
    console.log(`✅ '${componentName}' copied to '${destPath}'`);
  },
  nonAvailableCommand: (command: string) => {
    console.error(`❌ ${command} is not available as a command`);
  },
  nonValidComponentsProvided: () => {
    console.log(`❌ No valid components provided.`);
  },
  failureInstallingMoonCss: (err: unknown) => {
    if (typeof err === "object" && err !== null && "stderr" in err) {
      console.error("❌ Moon CSS install failed:", (err as ExecaError).stderr);
    } else {
      console.error("❌ Moon CSS install failed:", String(err));
    }
  },
};

export const promptBeforeInstallation = async (
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

export const filterArgs = (args: string[]): string[] => {
  return args.reduce<string[]>(
    (acc, curr, index) => {
      if (ARGS.includes(curr)) {
        args[index + 1] && acc.push(curr, args[index + 1]);
      } else if (curr.startsWith("--")) {
        logger.nonAvailableCommand(curr);
      }
      return acc;
    },
    [MOON_UI_PACKAGE]
  );
};

export async function initMoonCss(command: string[]): Promise<boolean> {
  return promptBeforeInstallation(PROMP_MOON_UI, async (): Promise<boolean> => {
    try {
      await execa("npx", command, {
        stdio: "inherit",
      });
      return true;
    } catch (err) {
      logger.failureInstallingMoonCss(String(err));
      return false;
    }
  });
}
