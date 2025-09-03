# Moon React

A modern React component library built to support consistent UI development across projects.

## 📦 Installation

### Full Package Installation

Install the complete component library:

```bash
npm install @heathmont/moon-react
# or
yarn add @heathmont/moon-react
# or
pnpm install @heathmont/moon-react
```

### Component Installation via CLI

Install selective components using the CLI:

```bash
# Add a single component
npx @heathmont/moon-react --add button

# Add multiple components
npx @heathmont/moon-react --add button input
```

Or install all components at once:

```bash
npx @heathmont/moon-react --add-components
```

## Moon UI Integration

[Moon UI](https://ui.moon.io/) is a standalone library for generating core and component CSS files from Figma design tokens.

### Configuration

Create a `.env` file in your project root with your Figma token:

```env
FIGMA_TOKEN=your-figma-token-here
```

### CLI Options for Moon UI

```bash
# Specify custom prefix for component classes
npx @heathmont/moon-react --customPrefix your-prefix

# Specify your project name for css files generation
npx @heathmont/moon-react --projectName your-project

# Use custom Figma files
npx @heathmont/moon-react --coreFileId CORE_FILE_ID --componentsProjectId COMPONENTS_PROJECT_ID

# Configure for non-Tailwind projects (default is 'tailwindcss')
npx @heathmont/moon-react --target css

# Generate vanilla CSS files with browser CSS reset. Not needed with tailwindcss target
npx @heathmont/moon-ui --target css --preflight
```

## 📝 Component Usage

### When installed via package.json

```typescript
import { Button } from "@heathmont/moon-react";

const App = () => <Button>Click me</Button>;
```

### When installed locally in your project directory

```typescript
import { Button } from "../local-path-to-moon-components;

const App = () => <Button>Click me</Button>;
```

## License

MIT

## Versioning

Moon UI follows [Semantic Versioning](https://semver.org/). View available versions in the [repository tags](https://github.com/coingaming/moon-react/tags).

- **MAJOR**: Incompatible API changes
- **MINOR**: New backward-compatible functionality
- **PATCH**: Backward-compatible bug fixes
