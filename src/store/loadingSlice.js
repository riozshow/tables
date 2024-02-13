import { addToStore } from './sliceCreator';

const loading = {};

const reducers = {
  setLoading(state, action) {
    state[action.payload] = true;
  },
  unsetLoading(state, action) {
    delete state[action.payload];
  },
};

const loadingSlice = addToStore({ loading, reducers });

//selectors

export const getLoading = (state, id) => state.loading[id];

export const { setLoading, unsetLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
