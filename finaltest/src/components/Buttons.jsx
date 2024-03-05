import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  
  const navigate = useNavigate();
  const handleClickAll = () => {
    navigate("/");
  };

  const handleClickActive = () => {
    navigate("/active");
  };

  const handleClickCompleted = () => {
    navigate("/completed");
  };

  return (
    <div className="buttons">
      <button className="switchButton" onClick={handleClickAll}>All</button>
      <button className="switchButton" onClick={handleClickActive}>Active</button>
      <button className="switchButton" onClick={handleClickCompleted}>Completed</button>
    </div>
  );
};

export default Buttons;
