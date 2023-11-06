const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  automock: false,
  rootDir: '../../',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/gqlcodegen',
    '<rootDir>/tests',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '~/mocks/(.*)$': '<rootDir>/mocks/$1',
    '~/public/(.*)$': '<rootDir>/public/$1',
    '~/tests/(.*)$': '<rootDir>/tests/$1',
    '~(.*)$': '<rootDir>/src/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/mocks/image.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/mocks/image.js',
  },
  coverageReporters: ['html', 'lcov', 'cobertura'],
  setupFiles: ['<rootDir>/tests/mocks.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
