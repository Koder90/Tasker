import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <Todo
            setTasks={setTasks}
            tasks={tasks}
            key={task.id}
            task={task}
            text={task.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
