import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredData, setFilteredData] = useState([]);

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
        <h1>Manasi's TO DO List</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodoItems={setTodoItems} todoItems={todoItems}
            setStatus={setStatus} />
      <ToDoList todoItems={todoItems} setTodoItems={setTodoItems} filteredData={filteredData} />
    </div>
  );
}

export default App;
