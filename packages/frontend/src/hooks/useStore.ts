import { useContext } from 'react';
import { StoreContext } from '@stores';
import { Store } from '@interfaces';

export const useStore = () => useContext<Store>(StoreContext);
