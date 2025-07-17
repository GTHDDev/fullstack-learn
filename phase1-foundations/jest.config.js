module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/*.test.ts',
    '!src/**/*.spec.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/challenge1/(.*)$': '<rootDir>/src/challenge1-js-fundamentals/$1',
    '^@/challenge2/(.*)$': '<rootDir>/src/challenge2-async-javascript/$1',
    '^@/challenge3/(.*)$': '<rootDir>/src/challenge3-typescript-types/$1',
    '^@/challenge4/(.*)$': '<rootDir>/src/challenge4-algorithms/$1',
    '^@/challenge5/(.*)$': '<rootDir>/src/challenge5-design-patterns/$1',
    '^@/challenge6/(.*)$': '<rootDir>/src/challenge6-testing/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testTimeout: 10000,
  verbose: true,
  bail: false,
  maxWorkers: '50%'
};
