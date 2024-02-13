import Table from '../Table/Table';
import { Spinner } from 'react-bootstrap';
import { getTables } from '../../../store/tablesSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useTables from '../../../hooks/useTables';

function TablesList() {
  const tables = useSelector(getTables);

  const { loading, getAllTables } = useTables();

  useEffect(() => {
    if (!tables.length) getAllTables();
  }, []);

  return (
    <>
      <h2>All tables</h2>
      <ul>
        {loading && <Spinner />}
        {!loading && tables.map((table) => <Table key={table.id} {...table} />)}
      </ul>
    </>
  );
}

export default TablesList;
