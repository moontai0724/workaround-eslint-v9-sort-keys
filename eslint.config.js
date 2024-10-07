// @ts-check
import pluginJs from "@eslint/js";
import { config as typedConfig, configs as tsConfigs } from "typescript-eslint";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";

export default typedConfig(
  { ignores: ["node_modules"] },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.ts"],
    extends: [...tsConfigs.strictTypeChecked],
  },
  {
    plugins: {
      "typescript-sort-keys": typescriptSortKeys,
    },
    rules: {
      "typescript-sort-keys/interface": "error",
      "typescript-sort-keys/string-enum": "error",
    },
  }
);
