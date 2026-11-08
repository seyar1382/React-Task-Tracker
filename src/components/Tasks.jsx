function Tasks({ tasks, setTasks }) {
  function toggleInput(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      {tasks.map((task) => {
        return (
          <div className="tasks" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleInput(task.id)}
              className="task-checkbox"
            />
            <span>{task.task}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Tasks;
