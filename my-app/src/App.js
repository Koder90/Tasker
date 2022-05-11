import { useState } from "react";
import "./index.css";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleClick = () => {
    const items = [...taskList, task];
    setTaskList(items);
    console.log(taskList)
  };

  const deleteItem = (index) => {
    const filteredTasks = taskList.filter((item, i)=> i !== index) 
    setTaskList(filteredTasks)
   
  }

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
      <ol id='list'>
        {taskList.map((val, i) => (
          <div className="list-item">
          <li index={i} key={Math.floor(Math.random() * 100)}>{val}
          </li>
          <button onClick={()=>deleteItem(i)}>X</button>
            </div>
        ))}
      </ol>
    </div>
  );
}
