import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoCard from './components/ToDoCard';

function App() {
  const [inputText, setInputText] = useState('');
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const filteredHandler = () => {
    switch (status) {
      case 'completed': setFilteredData(todoItems.filter(data => data.completed === true));
                        break;
      case 'uncompleted': setFilteredData(todoItems.filter(data => data.completed === false));
                          break;
      default: setFilteredData(todoItems);
                break;
    }
  }
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todoItems));
  }

  useEffect(() => {
    filteredHandler();
    saveToLocal();
  }, [todoItems, status]);

  return (
    <div className="App">
      <header>
        <h2>Welcome!! Here is your Task Manager</h2>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodoItems={setTodoItems} todoItems={todoItems}
            setStatus={setStatus} description={description} setDescription={setDescription} setDueDate={setDueDate}
            dueDate={dueDate} priority={priority} setPriority={setPriority} editingId={editingId} setEditingId={setEditingId} />
      <div className='cards-container'>
        <ToDoCard heading={"Upcoming Tasks"} todoItems={todoItems} setTodoItems={setTodoItems} filteredData={filteredData.filter(data => {
          return (new Date() < new Date(data.dueDate)) && !data.completed;
        })} onTaskEdit={setInputText}
        setDescription={setDescription} setDueDate={setDueDate} setPriority={setPriority} setEditingId={setEditingId}/>
        <ToDoCard heading={"Overdue Tasks"} todoItems={todoItems} setTodoItems={setTodoItems} filteredData={filteredData.filter(data => {
          const today = new Date();
          const due = new Date(data.dueDate);
          return ( today > due) && !data.completed
        })} onTaskEdit={setInputText}
        setDescription={setDescription} setDueDate={setDueDate} setPriority={setPriority} setEditingId={setEditingId}
        />
        <ToDoCard heading={"Completed Tasks"} todoItems={todoItems} setTodoItems={setTodoItems} filteredData={filteredData.filter(data => data.completed)} onTaskEdit={setInputText}
        setDescription={setDescription} setDueDate={setDueDate} setPriority={setPriority} setEditingId={setEditingId}/>
      </div>
    </div>
  );
}

export default App;
