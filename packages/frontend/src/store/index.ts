import { createContext } from 'react';
import { Store } from '@interfaces';
import { Container } from 'typedi';
import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});

export const initialStore: Store = {
};

export const StoreContext = createContext<Store>(initialStore);
export const StoreProvider = StoreContext.Provider;

export {
};
