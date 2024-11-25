import React, { createContext } from 'react';

import { CatsContextProps } from '../../types/CatsContext/CatsContext';

const initialState = {
    id: '',
    url: '',
};

export const CatsContext = createContext<CatsContextProps>(initialState);
