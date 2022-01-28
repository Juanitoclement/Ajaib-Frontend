import React from 'react';
import {render} from '@testing-library/react';

import MuiSearchBar from './index';

describe('MuiSearchBar', () => {
    test('renders MuiSearchBar component', () => {
        render(<MuiSearchBar />);
    });
});