import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todoItems, setTodoItems, filteredData, onTaskEdit, setDescription, setDueDate, setPriority, setEditingId}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredData.map(todo => (
                    <ToDo key={todo.id} setTodoItems={setTodoItems}
                    todoItems={todoItems} todo={todo} onTaskEdit={onTaskEdit}
                    setDescription={setDescription} setDueDate={setDueDate} setPriority={setPriority} setEditingId={setEditingId}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;