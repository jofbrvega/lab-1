import { useState} from "react";
import TodoItem from "./Todoitem";

function Todolist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Make dinner",
      completed: false,
    },
  ]);

  const [text, setText] = useState('');
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="flex flex-col max-w-screen-md mx-auto">
      <div className="w-full mx-auto">
        <input
          className="input-primary"
          placeholder="What's your task? "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-primary" onClick={() => addTask(text)}>
          Add
        </button>
      </div>
      <div className="p-20 flex flex-col justify-between gap-5">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default Todolist;
