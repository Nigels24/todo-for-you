import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Title',
      text: 'Description',
      date: '2022-12-20'
    },
    {
      id: 2,
      title: 'Title',
      text: 'Description',
      date: '2022-12-20'
    },
    {
      id: 3,
      title: 'Title',
      text: 'Description',
      date: '2022-12-20'
    },
    {
      id: 4,
      title: 'Title',
      text: 'Description',
      date: '2022-12-20'
    },
  ])

  const onAdd = (title,text,date) => {
    const id = todos.length + 1
    setTodos(prevTodo => [...prevTodo, {id: id, title: title, text: text, date: date}])
  }

  const onDelete = (id) => {
    const new_todo = todos.filter(todo => todo.id !== id)
    setTodos(new_todo)
  }


  return (
    <div className='container-fluid pe-5 ps-5 '>
      <Header/>
      <AddTodo onAdd={onAdd}/>
      <Todos todos={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
