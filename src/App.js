import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <h1>ToDo List</h1>
        <Task text={"pinky y pacha"} />
      </main>
    </div>
  );
}

export default App;
