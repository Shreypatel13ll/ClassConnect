/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch: [
    "**/__tests__/**/*.test.ts"
],
};