import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vitest.config.ts",
    test: {
      name: "a",
      include: ["./a/**/__tests__/**.ts"],
      typecheck: {
        tsconfig: "./a/tsconfig.json",
        include: ["./a/**/__tests__/**.test-d.ts"],
        enabled: true,
      },
    },
  },
  {
    extends: "./vitest.config.ts",
    test: {
      name: "b",
      include: ["./b/**/__tests__/**.ts"],
      typecheck: {
        tsconfig: "./b/tsconfig.json",
        include: ["./b/**/__tests__/**.test-d.ts"],
        enabled: true,
      },
    },
  },
]);
