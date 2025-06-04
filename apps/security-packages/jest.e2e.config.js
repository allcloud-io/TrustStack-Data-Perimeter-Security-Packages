/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/*.e2e-spec.ts"],
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  coverageReporters: ["html"],
};
