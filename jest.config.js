const { transform } = require("typescript");

module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  roots: ["<rootDir>/classes"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
