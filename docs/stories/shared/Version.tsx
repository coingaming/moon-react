import React from "react";
// @ts-ignore - JSON import
import packageJson from "../../../packages/package.json";

const Version = () => {
  return <span>v{packageJson.version}</span>;
};

export default Version;
