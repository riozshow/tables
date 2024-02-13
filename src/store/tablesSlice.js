import { addToStore } from './sliceCreator';

const tables = [];

const reducers = {
  updateTables(state, action) {
    return action.payload;
  },
  updateTable(state, action) {
    return state.map((table) => {
      if (table.id === action.payload.id) {
        return action.payload.table;
      }
      return table;
    });
  },
};

const tablesSlice = addToStore({ tables, reducers });

//selectors

export const getTables = (state) => state.tables;
export const getTable = (state, id) =>
  state.tables.find((table) => table.id === id);

export const { updateTables, updateTable } = tablesSlice.actions;
export default tablesSlice.reducer;
