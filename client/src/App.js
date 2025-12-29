function App() {

  const tasks = [
                 "Walk 50 km",
                 "Sleep 8 hours",
                 "Eat"
                ];

  return(
    <div>
          <h1>Task Manager</h1>
          
          <ul>
            {tasks.map((task, index) => (
              <li key = {index}>{task}</li>
            ))}
          </ul>
    </div>
  );
}

export default App;
