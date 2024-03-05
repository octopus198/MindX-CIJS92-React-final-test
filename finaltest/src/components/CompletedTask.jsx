import React from 'react'
import { useContext } from 'react';
import { Context } from '../App';
import { FaTrash } from "react-icons/fa";
import DeleteAllButton from './DeleteAllButton';

const CompletedTask = () => {
  const { listTask, handleChange, handleDelete } = useContext(Context);

  return (
    <div className='listTask'>
      <div className="completeListTask">
      {listTask
        .filter((t) => t.checked === true) 
        .map((t) => (
          <div className="taskLine" key={t.id}>
            <input className="checkboxField" type="checkbox" checked={t.checked} onChange={() => handleChange(t.id)} />
            <span
              style={{
                textDecoration: t.checked ? "line-through" : "none",
              }}
            >
              {t.name}
            </span>
            <FaTrash onClick={() => handleDelete(t.id)}/>
          </div>
        ))}
        </div>
        <DeleteAllButton />
    </div>
  );
}

export default CompletedTask