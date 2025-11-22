module.exports = {
    roots:['<rootDir>/src'],
    transform: {
        '^.+||tsx?$':'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[mc]?[jt]sx?$',
    moduleFileExtensions: ['ts','tsx','js', 'json', 'node'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/utils/**/*.ts']
}