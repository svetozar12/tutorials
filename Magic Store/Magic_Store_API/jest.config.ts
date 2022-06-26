module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  roots: ["./src"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|js)$": "ts-jest",
  },
  testMatch: ["**/src/**/*.test.(ts|js)"],
  testEnvironment: "node",
};
