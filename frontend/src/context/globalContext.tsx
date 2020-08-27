import { createContext } from 'react';

interface GlobalData {
  deliveries: object[];
}

export const globalContext = createContext({} as GlobalData);

export const globalProvider = {};
