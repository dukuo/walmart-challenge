module.exports = {
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/__mocks__/svgrMock.js",
  },
  
  projects: [
    {
      displayName: "FRONTEND",
      preset: "ts-jest/presets/js-with-ts",
      testEnvironment: "jsdom",
      moduleFileExtensions: ["ts", "tsx", "js"],
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        // "^.+\\.svg$": "<rootDir>/__mocks__/svgrMock.js"
      },
      testMatch: ["<rootDir>/**/*.(test|spec).(ts|tsx)"],
      setupFilesAfterEnv: ["<rootDir>/___tests___/config/setupJest.ts"],
      testPathIgnorePatterns: ["./.next/", "./node_modules/", '<rootDir>/pages/api/', '<rootDir>/collections'],
      globals: {
        "ts-jest": {
          tsConfig: "tsconfig.jest.json"
        }
      }
    },
    {
      displayName: 'API & MongoDB',
      testEnvironment: 'node',
      preset: "ts-jest/presets/js-with-ts",
      testMatch: ["<rootDir>/pages/api/**/*.(test|spec).(ts|tsx)", "<rootDir>/collections/**/*.(test|spec).(ts|tsx)"],
      moduleFileExtensions: ["ts", "tsx", "js"],
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
    }
  ]
};