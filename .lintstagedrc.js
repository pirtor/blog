const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPretterCommand = (filenames) =>
  filenames.map((filename) => `prettier --write '${filename}'`);

module.exports = {
  "*.{mjs,js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{mjs,js,jsx.ts,tsx,json,md,mdx}": [buildPretterCommand],
};
