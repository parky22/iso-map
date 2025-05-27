import '@testing-library/jest-dom';

// Extend expect with DOM matchers
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 
