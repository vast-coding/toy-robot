module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'], // tell jest root dir
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  // verbose: true, //display tests run,passed,failed
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageReporters: ['lcov'],
}
