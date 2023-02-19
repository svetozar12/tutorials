export default {
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  testTimeout: 10000,
};
