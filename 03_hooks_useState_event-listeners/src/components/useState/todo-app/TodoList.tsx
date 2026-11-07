import { useState } from "react";

/**
 * Requirements:
 * - Input field to add a task
 * - Button to add task to a list
 * - Display list of tasks
 * Bonus:
 * - Delete a task
 * - Mark task as completed
 */

/**
 * task: "Brush Teeth"
 * task: "Eat Breakfast"
 * task: "Take Shower"
 * task: "Go Outside"
 *
 */

type TaskType = {
  text: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskInput, setTaskInput] = useState("");

  function handleAddClick() {
    if (taskInput.trim() === "") {
      return;
    }
    setTasks([...tasks, { text: taskInput, isCompleted: false }]);
    setTaskInput("");
  }

  function handleDeleteClick(clickedIndex: number) {
    const deleteTask = tasks.filter((task, index) => index !== clickedIndex);
    setTasks(deleteTask);
  }

  function handleToggleClick(clickedIndex: number) {
    const updatedTasks = tasks.map((task, index) => {
      if (index === clickedIndex) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="border-2">
        <h2>TODO/TASK LIST</h2>
        <input
          type="text"
          className="border-2"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="border-2 rounded-xl px-3" onClick={handleAddClick}>
          Add Task
        </button>
      </div>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-center items-center gap-4">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleToggleClick(index)}
              />
              <span className={task.isCompleted ? "line-through" : ""}>
                {task.text}
              </span>
              <button
                className="border-2 rounded-xl px-3"
                onClick={() => handleDeleteClick(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
