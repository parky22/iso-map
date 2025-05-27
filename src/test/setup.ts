import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Make Vitest's expect extend Jest DOM matchers
expect.extend(matchers);

// Make test functions available globally
declare global {
  export const it: typeof import('vitest')['it'];
  export const describe: typeof import('vitest')['describe'];
  export const expect: typeof import('vitest')['expect'];
  export const vi: typeof import('vitest')['vi'];
  export const beforeEach: typeof import('vitest')['beforeEach'];
  export const beforeAll: typeof import('vitest')['beforeAll'];
  export const afterEach: typeof import('vitest')['afterEach'];
  export const afterAll: typeof import('vitest')['afterAll'];
} 
