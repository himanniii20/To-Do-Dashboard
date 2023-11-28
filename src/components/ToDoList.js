import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todoItems, setTodoItems, filteredData}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredData.map(todo => (
                    <ToDo key={todo.id} text={todo.text} setTodoItems={setTodoItems}
                    todoItems={todoItems} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;