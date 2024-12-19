module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.[jt]s?(x)"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./tests/setup/globalSetup.ts"],
  globalTeardown: "./tests/setup/globalTeardown.ts",
};