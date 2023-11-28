import React from 'react';

const Form = ({setInputText, inputText, setTodoItems, todoItems, setStatus}) => {
    const setInput = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, {text: inputText, completed: false, id: Math.random() * 10}]);
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={setInput} type='text' className='todo-input' />
            <button className='todo-button' type='submit' onClick={submitHandler}>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;