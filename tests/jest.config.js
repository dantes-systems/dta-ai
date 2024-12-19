module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(test).[tj]s?(x)"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./tests/setup/globalSetup.ts"],
  globalTeardown: "./tests/setup/globalTeardown.ts",
};