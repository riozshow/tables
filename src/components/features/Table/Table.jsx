import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoading } from '../../../store/loadingSlice';

function Table({ id, status }) {
  const navigate = useNavigate();

  const loading = useSelector((state) => getLoading(state, id));

  return (
    <li className='d-flex gap-5 align-items-center p-3'>
      <h4>Table {id}</h4>
      <p>
        <b>Status: </b>
      </p>
      {loading && <Spinner />}
      {!loading && <p>{status}</p>}
      <Button
        className='ms-auto'
        onClick={() => {
          navigate(`table/${id}`);
        }}>
        Show more
      </Button>
    </li>
  );
}

export default Table;
