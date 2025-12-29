import {useState} from "react";

function App() {

  const [tasks, setTasks] = useState([
                 "Walk 50 km",
                 "Sleep 8 hours",
                 "Eat"
                ]);
  
  const [newTask, setNewTask] = useState("");

  function addTask(){
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick = {addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );

}

export default App;
