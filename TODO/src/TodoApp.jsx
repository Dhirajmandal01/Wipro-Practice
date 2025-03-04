import { useState } from "react";
import { CheckSquare, Square, Edit, Trash2, Plus } from "lucide-react";
import "./TodoApp.css";

export default function TodoListApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "work on algorithms", completed: false },
    { id: 2, text: "make a ui design", completed: false },
    { id: 3, text: "create a new project", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Todo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
          placeholder="Enter Todo"
        />
        <button onClick={addTodo} className="add-button">
          <Plus />
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="todo-text" onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? (
                <CheckSquare className="icon checked" />
              ) : (
                <Square className="icon" />
              )}
              <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
            </div>
            <div className="actions">
              <button className="edit-button">
                <Edit />
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
