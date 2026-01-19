import React, { useState } from "react";
import "./AddTodoForm.css";

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    await addTodo(title.trim());
    setTitle("");
    setLoading(false);
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Enter a new todo..."
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={!title.trim() || loading}>
        {loading ? "Adding..." : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodoForm;
