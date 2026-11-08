import { useState } from "react";
import Tasks from "./components/Tasks";
import ChatInput from "./components/ChatInput";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  return (
    <div>
      <h1>Task Tracker</h1>
      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        setTasks={setTasks}
        tasks={tasks}
      />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
