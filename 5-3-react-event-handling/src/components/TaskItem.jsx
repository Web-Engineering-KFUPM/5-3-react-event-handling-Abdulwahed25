import React from "react";

export default function TaskItem({ id, text, onDelete }) {
  return (
    <li className="item">
      <span className="item__text">{text}</span>
      <div className="item__actions">
        <button
          className="iconBtn iconBtn--danger"
          aria-label="Delete task"
          title="Delete"
          onClick={() => onDelete(id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}