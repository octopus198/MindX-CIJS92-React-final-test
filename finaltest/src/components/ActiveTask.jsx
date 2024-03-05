import React, { useContext } from "react";
import InputTask from "./InputTask";
import { Context } from "../App";

const ActiveTask = () => {
  const { listTask, handleChange } = useContext(Context);

  return (
    <div className="listTask">
      <InputTask className="input-task"/>
      {listTask
        .filter((t) => t.checked === false) 
        .map((t) => (
          <div key={t.id}>
            <input className="checkboxField" type="checkbox" checked={t.checked} onChange={() => handleChange(t.id)} />
            <span
              style={{
                textDecoration: t.checked ? "line-through" : "none",
              }}
            >
              {t.name}
            </span>
          </div>
        ))}
    </div>
  );
};

export default ActiveTask;
