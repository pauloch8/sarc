/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';
import { resolve } from 'path';

const root = resolve(__dirname);

const config: Config.InitialOptions = {
    // roots: ['<rootDir>/tests'],
    rootDir: root,
    displayName: 'testes-de-unidade',
    testMatch: ['<rootDir>/src/**/*.(spec|test).ts'],
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '.+\\.ts$':
            // 'ts-jest'
            '@swc/jest',
    },
    moduleNameMapper: {
        '@/tests/(.*)': '<rootDir>/tests/$1',
        '@/(.*)': '<rootDir>/src/$1',
    },
};

export default config;
