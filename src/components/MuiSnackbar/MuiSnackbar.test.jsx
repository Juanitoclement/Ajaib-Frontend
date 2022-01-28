import React from 'react';
import { render } from '@testing-library/react';

import MuiSnackbar from './index';

describe('MuiSnackbar', () => {
    test('renders MuiSnackbar component', () => {
        render(<MuiSnackbar />);
    });
});