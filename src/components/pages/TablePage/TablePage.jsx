import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTable } from '../../../store/tablesSlice';
import { Button } from 'react-bootstrap';
import useTables from '../../../hooks/useTables';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const MAX_PEOPLE_AMOUNT = 10;
const STATUS_OPTIONS = ['Free', 'Reserved', 'Busy', 'Cleaning'];

function TablePage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tableId = pathname.split('table/')[1];
  const table = useSelector((state) => getTable(state, tableId));
  const { updateTable } = useTables();

  const [currentTable, setCurrentTable] = useState({});

  const patch = (key, value) => {
    setCurrentTable({ ...currentTable, [key]: value });
  };

  const handleUpdate = () => {
    for (const key in table) {
      if (table[key] !== currentTable[key]) {
        updateTable(currentTable);
        break;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    table ? setCurrentTable(table) : navigate('/');
  }, [table]);

  useEffect(() => {
    if (currentTable.id) {
      if (currentTable.status !== 'Busy' && currentTable.bill !== 0) {
        patch('bill', 0);
      }
      if (
        currentTable.status === 'Cleaing' ||
        currentTable.status === 'Free' ||
        currentTable.peopleAmount < 0
      ) {
        if (currentTable.peopleAmount !== 0) patch('peopleAmount', 0);
      }
      if (currentTable.peopleAmount > currentTable.maxPeopleAmount) {
        patch('peopleAmount', currentTable.maxPeopleAmount);
      }
      if (currentTable.maxPeopleAmount > MAX_PEOPLE_AMOUNT) {
        patch('maxPeopleAmount', MAX_PEOPLE_AMOUNT);
      }
    }
  }, [currentTable]);

  if (table)
    return (
      <div className='d-flex gap-3 flex-column align-items-start'>
        <h2>Table {table.id}</h2>

        <div className='d-flex align-items-center gap-2'>
          <p>
            <b>Status</b>
          </p>

          <Dropdown>
            <Dropdown.Toggle id='dropdown-basic' variant='secondary'>
              {currentTable.status}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {STATUS_OPTIONS.map((option) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => patch('status', option)}>
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='d-flex align-items-center gap-2'>
          <p>
            <b>People</b>
          </p>
          <div className='d-flex gap-2 align-items-center'>
            <input
              onChange={(e) => patch('peopleAmount', parseInt(e.target.value))}
              value={currentTable.peopleAmount | ''}
              style={{ width: '5ch', textAlign: 'center' }}
              className='form-control'></input>
            /
            <input
              onChange={(e) =>
                patch('maxPeopleAmount', parseInt(e.target.value))
              }
              value={currentTable.maxPeopleAmount | ''}
              style={{ width: '5ch', textAlign: 'center' }}
              className='form-control'></input>
          </div>
        </div>

        {currentTable.status === 'Busy' && (
          <div className='d-flex align-items-center gap-2'>
            <p>
              <b>Bill</b>
            </p>
            <p>$</p>
            <input
              onChange={(e) => patch('bill', e.target.value)}
              value={currentTable.bill | ''}
              className='form-control'></input>
          </div>
        )}

        <Button onClick={handleUpdate}>Update</Button>
      </div>
    );
}

export default TablePage;
