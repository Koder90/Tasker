import { useState, useEffect } from "react";
import "./index.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [tasks, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
       setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "uncompleted":
       setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
       setFilteredTasks(tasks);
        break;
    }
  };

  return (
    <div className="App">
      <h1 className="title">TASKER</h1>

      <Form
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
      filteredTasks={filteredTasks}
      />
    </div>
  );
}
