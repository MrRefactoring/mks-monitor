import { Store } from '@interfaces';
import { StoreContext } from '@store';
import { useContext } from 'react';

export const useStore = () => useContext<Store>(StoreContext);
