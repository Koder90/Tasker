import { useState } from "react";
import "./index.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
