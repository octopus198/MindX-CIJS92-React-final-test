import React, { useContext } from "react";
import { Context } from "../App";

const ListTask = () => {
  const { listTask, handleChange } = useContext(Context);

  return (
    <div className="listTask">
      {listTask.map((t) => (
        <div key={t.id}>
          <input className="checkboxField" type="checkbox" checked={t.checked} onChange={() => handleChange(t.id)} />
          <span
            style={{
              textDecoration: t.checked ? "line-through" : "",
            }}
          >
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
