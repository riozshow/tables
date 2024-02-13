import { useDispatch } from 'react-redux';
import useAPI from './useAPI';
import {
  updateTables,
  updateTable as updateTableStorage,
} from '../store/tablesSlice';
import { setLoading, unsetLoading } from '../store/loadingSlice';

function useTables() {
  const dispatch = useDispatch();

  const { loading, call } = useAPI();

  const getAllTables = () =>
    call((API) =>
      API.GET('tables').then((tables) => dispatch(updateTables(tables)))
    );

  const updateTable = (table = {}) => {
    dispatch(setLoading(table.id));
    call((API) => API.PUT(`tables/${table.id}`, table)).then(() => {
      dispatch(updateTableStorage({ id: table.id, table }));
      dispatch(unsetLoading(table.id));
    });
  };

  return {
    loading,
    getAllTables,
    updateTable,
  };
}

export default useTables;
