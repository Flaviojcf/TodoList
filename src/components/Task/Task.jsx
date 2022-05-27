import { useState } from "react";
import "./Task.css";

export function Task() {
  const [addTitle, setAddTitle] = useState(" ");
  const [tasks, setTasks] = useState([]);

  function handleCreateTask() {
    if (!addTitle) return;
    const newTask = {
      id: Math.random(),
      title: addTitle,
      isComplete: false,
    };
    setTasks((oldState) => [...oldState, newTask]);
    setAddTitle("");
  }

  function handleRemoveTasks(id) {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  }

  function handleCompleteTasks(id) {
      const alltasks = tasks.map((tasks)=>tasks.id === id ?{
          ...tasks,
          isComplete: !tasks.isComplete
      }:tasks)
      setTasks(alltasks)
  }

  return (
    <div className="divTask">
      <div className="addTask">
        <div>
          <h1>Minhas Tasks</h1>
        </div>
        <div className="teste3">
          <input
            type="text"
            placeholder="Adicionar nova task"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
          <button onClick={handleCreateTask}>Adicionar</button>
        </div>
        </div>
        <div className="newTasks">
          {tasks.map((task) => (
            <div key={task.id} className={task.isComplete ? 'completed' : ''}>
            <li  className='teste'>
              <div className="teste2">
                  <input type="checkbox" readOnly
                  checked={task.isComplete}
                  onClick={() => handleCompleteTasks(task.id)}
                  />
                  <p>{task.title}</p>
              </div>
              <div>
                  <button onClick={() => handleRemoveTasks(task.id)}>
                    Remover
                  </button>
              </div>
            </li>
            </div>
          ))}
        </div>
      </div>
  );
}
