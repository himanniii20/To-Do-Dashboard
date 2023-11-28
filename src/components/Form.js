const Form = ({
  setInputText,
  inputText,
  setTodoItems,
  todoItems,
  setStatus,
  description,
  setDescription,
  setDueDate,
  dueDate,
  priority,
  setPriority,
  editingId,
  setEditingId
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 10,
        priority,
        description,
        dueDate,
      },
    ]);
    setInputText("");
    setDescription("");
    setDueDate("");
    setPriority("low");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Enter your task name"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Enter the description"
      />
      <input
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        type="date"
        className="todo-input"
        placeholder="Enter due date"
      />
      <select
        onChange={(e) => setPriority(e.target.value)}
        name="todos"
        className="priority"
        value={priority}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button
        className="todo-button"
        type="submit"
        onClick={submitHandler}
        disabled={!(inputText && description && dueDate)}
      >
        {!editingId ? <i className="fas fa-plus-square"></i> : <i className="fas fa-pen"></i>}
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
