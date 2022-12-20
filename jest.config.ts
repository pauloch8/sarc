/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: ['<rootDir>/tests'],
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
    coverageDirectory: 'coverage',
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    testMatch: ['**/*.{spec,test}.ts'],
    moduleNameMapper: {
        '@/tests/(.*)': '<rootDir>/tests/$1',
        '@/(.*)': '<rootDir>/src/$1',
    },
};

export default config;
