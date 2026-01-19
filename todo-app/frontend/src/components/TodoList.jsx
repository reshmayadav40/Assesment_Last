import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ title, todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      <h2>
        {title} ({todos.length})
      </h2>
      {todos.length === 0 ? (
        <p>No todos here!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
