import { useState } from "react";
import "./index.css";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleClick = () => {
    const items = [...taskList, task];
    setTaskList(items);
  };

  return (
    <div className="App">
      <h1 id="title">TASKER</h1>
      <input
        id="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="button" type="button" onClick={handleClick}>
        Submit
      </button>
      <ol>
        {taskList.map((val) => (
          <li key={val.index}>{val}</li>
        ))}
      </ol>
    </div>
  );
}
