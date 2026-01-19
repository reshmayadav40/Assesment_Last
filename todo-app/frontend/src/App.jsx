import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

const API_URL = "https://backendapi-cwp7.onrender.com/api/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      const res = await axios.post(API_URL, { title });
      setTodos((prev) => [...prev, res.data]);
    } catch (err) {
      alert("Failed to add todo");
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed });
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? { ...todo, completed } : todo))
      );
    } catch (err) {
      alert("Failed to update todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      alert("Failed to delete todo");
    }
  };

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <div className="app-container">
      <h1>My Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      {loading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <TodoList
            title="Active Todos"
            todos={activeTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          <TodoList
            title="Completed Todos"
            todos={completedTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </>
      )}
    </div>
  );
};

export default App;
