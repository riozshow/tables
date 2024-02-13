import { createSlice, createAction } from '@reduxjs/toolkit';

export const clearStore = createAction('CLEAR_STORE');

export const addToStore = (sliceConfig) => {
  const config = {};

  for (const property in sliceConfig) {
    if (!config.name) {
      config.name = property;
      config.initialState = sliceConfig[property];
      break;
    }
  }
  config.reducers = { ...sliceConfig.reducers };
  config.extraReducers = (builder) =>
    builder.addCase(clearStore, () => config.initialState);

  return createSlice(config);
};
