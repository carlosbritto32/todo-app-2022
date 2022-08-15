import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <h1>ToDo List</h1>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
