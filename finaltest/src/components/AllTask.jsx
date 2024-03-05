import React, { useContext } from "react";
import InputTask from "./InputTask";
import ListTask from "./ListTask";

const AllTask = () => {
  return (
    <div className="listTask">
      <InputTask />
      <ListTask />
    </div>
  );
};

export default AllTask;
