# 🌙 @heathmont/moon-react

A modern React component library built to support consistent UI development across projects.

---

## 📦 Installation

Install the full package:

```bash
yarn add @heathmont/moon-react
```

# Selective Usage via CLI

npx @heathmont/moon-react --add component-name

component names should be typed in lowercase, e.g:

npx @heathmont/moon-react --add button textarea input

As optional flags you can use the following:

--all-components e.g: npx @heathmont/moon-react --all-components just in case
you want to use them all so you don't have you write every component you want to install.

--outputFolder e.g npx @heathmont/moon-react add button textarea --outputFolder src/css that way you have control over the directory where css components are placed

npx @heathmont/moon-react --coreFileId CORE_FILE_ID --componentsFileId COMPONENTS_FILE_ID so you can use your own core and components figma files

npx @heathmont/moon-react --target css with this flag you can configure moon-react for tailwind projects or non tailwind projects, default is 'tailwindcss'

# Prerequisites

node 20.9.0 or above

# Configuration

Add an .env file to your project with a FIGMA_TOKEN variable with a valid figma token
