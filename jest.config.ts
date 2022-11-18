/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
    coverageDirectory: 'coverage',
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
};

export default config;
