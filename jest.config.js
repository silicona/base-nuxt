module.exports = {
  //coverageProvider: "babel",
  preset: '@nuxt/test-utils',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  runner: 'groups', // Habilita los groups de ejecucion de test (tags)
  setupFilesAfterEnv: ["@alex_neo/jest-expect-message"],  // Antiguo   "setupTestFrameworkScriptFile": "jest-expect-message"
  //setupFilesAfterEnv: ["jest-expect-message"],  // Antiguo   "setupTestFrameworkScriptFile": "jest-expect-message"
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jsdom',
  testSequencer: './test/support/testSequencerAlfaBeta.js',
  verbose: true
}
