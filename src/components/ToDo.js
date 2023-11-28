import React from 'react';

const ToDo = ({text, setTodoItems, todoItems, todo}) => {
    const deleteHandler = () => {
        setTodoItems(todoItems.filter(elem => elem.id !== todo.id));
    }
    const completeHandler = () => {
        setTodoItems(todoItems.map((data) => {
            if (data.id === todo.id) {
                return {
                    ...data, completed: !data.completed
                };
            }
            return data;
        }));
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default ToDo;