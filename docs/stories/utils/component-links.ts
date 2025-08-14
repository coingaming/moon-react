import componentLinks from "./component-links.json";

type ComponentName = keyof typeof componentLinks.components;

export const getComponentLinks = (componentName: string) => {
  return componentLinks.components[componentName as ComponentName];
};

export const getMoonLink = (componentName: string) => {
  return getComponentLinks(componentName)?.moon;
};

export const getGithubLink = (componentName: string) => {
  return getComponentLinks(componentName)?.github;
};

// Export the full links object for direct access if needed
export { componentLinks };
