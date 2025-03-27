module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
};
