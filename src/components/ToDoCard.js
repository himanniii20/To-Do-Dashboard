import React from 'react'
import ToDoList from './ToDoList'

const ToDoCard = ({heading, todoItems, setTodoItems, filteredData, onTaskEdit, setDescription, setDueDate, setPriority, setEditingId}) => {
  return (
    <div className='card'>
        <h3 className='heading'>{heading}</h3>
        <ToDoList todoItems={todoItems} setTodoItems={setTodoItems} filteredData={filteredData} onTaskEdit={onTaskEdit}
        setDescription={setDescription} setDueDate={setDueDate} setPriority={setPriority} setEditingId={setEditingId}/>
    </div>
  )
}

export default ToDoCard