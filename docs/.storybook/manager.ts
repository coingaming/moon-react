import { addons } from "storybook/manager-api";
import lightTheme from "./lightTheme";

addons.setConfig({
  theme: lightTheme,
});

const titlePrefix = "Moon React library | ";

const observer = new MutationObserver(() => {
  if (!document.title.startsWith(titlePrefix)) {
    document.title = titlePrefix + document.title;
  }
});

observer.observe(document.querySelector("title") || document.head, {
  childList: true,
  characterData: true,
});
