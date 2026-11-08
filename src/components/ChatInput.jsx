function ChatInput({ setInputMessage, inputMessage, setTasks, tasks }) {
  function storeMessage(event) {
    setInputMessage(event.target.value);
  }

  function updateTasks() {
    setTasks([
      ...tasks,
      { id: Date.now(), task: inputMessage, completed: false },
    ]);
    setInputMessage("");
  }

  function checkEnter(event) {
    event.key === "Enter" ? updateTasks() : tasks;
  }

  return (
    <div className="chat-input-container">
      <input
        value={inputMessage}
        onChange={storeMessage}
        type="text"
        placeholder="Enter a task"
        onKeyDown={checkEnter}
        className="chat-input"
        required
      />
      <button onClick={updateTasks}>Add</button>
    </div>
  );
}

export default ChatInput;
