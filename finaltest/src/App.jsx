import { createContext, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTask from "./components/AllTask";
import ActiveTask from "./components/ActiveTask";
import CompletedTask from "./components/CompletedTask";
import Buttons from "./components/Buttons";

export const Context = createContext();

function App() {
  const [listTask, setListTask] = useState(
    () => {
      const storedListTask = localStorage.getItem("listTask");
      return storedListTask ? JSON.parse(storedListTask) : [];
    }
  );
  
  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(listTask));
  }, [listTask]);
  const handleChange = (id) => {
    const newListTask = listTask.map((t) => {
      if (t.id === id) {
        return { ...t, checked: !t.checked };
      } else {
        return t;
      }
    });
    setListTask(newListTask);
  };

  const handleDelete = (id) => {
    alert("This task will be permanently deleted.");
    setListTask(listTask.filter((t) => t.id !== id));
  };

  const deleteAll = () => {
    alert("This will permanently delete all completed tasks.");
    setListTask(listTask.filter((t) => t.checked !== true));
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Context.Provider
          value={{
            listTask,
            setListTask,
            handleChange,
            handleDelete,
            deleteAll,
          }}
        >
          <h1>#todo</h1>
          <Buttons />
          <hr />
          <Routes>
            <Route path="/" element={<AllTask />} />
            <Route path="/active" element={<ActiveTask />} />
            <Route path="/completed" element={<CompletedTask />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
