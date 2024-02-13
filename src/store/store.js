import { configureStore } from '@reduxjs/toolkit';
import tablesSlice from './tablesSlice';
import loadingSlice from './loadingSlice';

const reducer = {
  tables: tablesSlice,
  loading: loadingSlice,
};

const store = configureStore({ reducer });

export default store;
