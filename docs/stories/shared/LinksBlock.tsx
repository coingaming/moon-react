import {
  DocsContainer,
  DocsContextProps,
  DocsPage,
} from "@storybook/addon-docs/blocks";
import { Renderer } from "storybook/internal/types";
import { getMoonLink, getGithubLink } from "../utils/component-links";

type Props = {
  context: DocsContextProps<Renderer>;
  component: string;
};

const LinksBlock = ({ context, component }: Props) => (
  <DocsContainer context={context}>
    <div className="sb-unstyled flex flex-col sm:flex-row gap-space-12 mb-space-40">
      <a
        href={`https://beta.moon.io/docs/components/${getMoonLink(component)}`}
        target="_blank"
        className="overflow-hidden flex items-center border border-primary rounded-200 h-space-48"
      >
        <div className="flex items-center justify-center h-full aspect-square bg-tertiary">
          <img src="/logo.png" alt="Website" className="w-space-40" />
        </div>
        <div className="flex flex-col px-space-8">
          <span className="text-md font-medium">View component</span>
          <span className="text-sm text-secondary">Moon Design System</span>
        </div>
      </a>
      <a
        href="https://www.npmjs.com/package/@heathmont/moon-react"
        target="_blank"
        className="overflow-hidden flex items-center border border-primary rounded-200 h-space-48"
      >
        <div className="flex items-center justify-center h-full aspect-square bg-tertiary">
          <img src="/npm.png" alt="NPM" className="w-space-40" />
        </div>
        <div className="flex flex-col px-space-8">
          <span className="text-md font-medium">View package</span>
          <span className="text-sm text-secondary">NPM</span>
        </div>
      </a>
      <a
        href={`https://github.com/coingaming/moon-react/blob/main/packages/src/components/${getGithubLink(
          component
        )}`}
        target="_blank"
        className="overflow-hidden flex items-center border border-primary rounded-200 h-space-48"
      >
        <div className="flex items-center justify-center h-full aspect-square bg-tertiary">
          <img src="/github.png" alt="GitHub" className="w-space-40" />
        </div>
        <div className="flex flex-col px-space-8">
          <span className="text-md font-medium">View component</span>
          <span className="text-sm text-secondary">GitHub</span>
        </div>
      </a>
    </div>
    <DocsPage />
  </DocsContainer>
);

export default LinksBlock;
