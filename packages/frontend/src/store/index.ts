import { configure } from 'mobx';
import { Container } from 'typedi';
import { createContext } from 'react';
import { JobsStore } from '@store/jobStore/jobsStore';
import { Store } from '@interfaces';

configure({
  enforceActions: 'never',
});

export const initialStore: Store = {
  jobs: Container.get(JobsStore),
};

export const StoreContext = createContext<Store>(initialStore);
export const StoreProvider = StoreContext.Provider;

export {
  JobsStore,
};
