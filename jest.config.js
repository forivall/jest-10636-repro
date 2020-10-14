/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel7-jest',
  },
  transformIgnorePatterns: [],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
  testPathIgnorePatterns: ['/node_modules/', '/ignore-build/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{d.ts}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.data.{ts,tsx}',
    '!src/**/*.mock.{ts,tsx}',
    '!src/**/interface.{ts,tsx}',
    '!src/**/_data/sagas/**.{ts,tsx}',
    '!src/**/_data/modelKeys.ts',
    '!src/**/_data/Scrapers/**',
    '!src/_lib/common_components/index.tsx',
    '!src/_lib/common_components/lib/Table/DraggableTableComponent.tsx', // unused
    '!src/**/constants/**/*.{ts,tsx}',
    '!src/Routing/routingMap.ts',
    '!src/generated/**',
  ],
  coverageThreshold: {
    global: {
      branches: 30, // 35
      functions: 35, // 40,
      lines: 35, // 40,
      statements: 35, // 40,
    },
    './src/**/actions/*.{ts,tsx}': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  verbose: false,
  setupFiles: ['<rootDir>/config/tests/test-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
