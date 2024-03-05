import React from "react";
import { useContext } from "react";
import { Context } from "../App";

const DeleteAllButton = () => {
  const { deleteAll } = useContext(Context);
  return (
    <div>
      <button className="deleteButton" onClick={deleteAll}>Delete All</button>
    </div>
  );
};

export default DeleteAllButton;
