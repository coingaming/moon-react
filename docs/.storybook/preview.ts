import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "./globals.css";

const preview: Preview = {
  globalTypes: {
    direction: {
      name: "Text Direction",
      description: "Switch between LTR and RTL",
      defaultValue: "ltr",
      toolbar: {
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR (Left to Right)" },
          { value: "rtl", title: "RTL (Right to Left)" },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
    }),
    (Story, context) => {
      const direction = context.globals.direction || "ltr";
      const theme = context.globals?.theme || "light";
      document.documentElement.setAttribute("dir", direction);
      const docsStory = document.querySelector(".docs-story");
      const mainPadded = document.querySelector(".sb-main-padded");
      if (docsStory) {
        docsStory.classList.remove("dark-theme", "light-theme");
        docsStory.classList.add(`${theme}-theme`);
      }
      if (mainPadded) {
        mainPadded.classList.remove("dark-theme", "light-theme");
        mainPadded.classList.add(`${theme}-theme`);
      }
      return Story();
    },
  ],
  tags: ["autodocs"],
};

export default preview;
