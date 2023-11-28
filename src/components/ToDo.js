import React from "react";

const ToDo = ({ setTodoItems, todoItems, todo, onTaskEdit, setDescription, setDueDate, setPriority, setEditingId }) => {
    let {text, description, dueDate, priority} = todo;
  const deleteHandler = () => {
    setTodoItems(todoItems.filter((elem) => elem.id !== todo.id));
  };
  const completeHandler = () => {
    setTodoItems(
      todoItems.map((data) => {
        if (data.id === todo.id) {
          return {
            ...data,
            completed: !data.completed,
          };
        }
        return data;
      })
    );
  };

  const editHandler = () => {
    setEditingId(todo.id);
    onTaskEdit(todo.text);
    setPriority(todo.priority);
    setDescription(todo.description);
    setDueDate(todo.dueDate);
  };

  return (
    <div className="todo">
      <table className="to-do-table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td className={`todo-item ${todo.completed ? "completed" : ""}`}>
              {text}
            </td>
            <td className={`${todo.completed ? "completed" : ""}`}>
              {description}
            </td>
            <td className={`${todo.completed ? "completed" : ""}`}>
              {dueDate}
            </td>
            <td className={`${todo.completed ? "completed" : ""}`}>
              {priority}
            </td>
            <td>
              {!todo.completed && (
                <>
                  <button className="complete-btn" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="edit-btn" onClick={editHandler}>
                    <i className="fas fa-pen"></i>
                  </button>
                </>
              )}
              <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
