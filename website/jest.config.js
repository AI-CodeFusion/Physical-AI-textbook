module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@site/(.*)$': '<rootDir>/website/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.mdx?$': '@docusaurus/module-type-aliases/src/jest-transformer.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/website/build/',
  ],
};