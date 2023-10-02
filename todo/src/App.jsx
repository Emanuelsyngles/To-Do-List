import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return <div className="App">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
    <TodoForm/>
  </div>
}

export default App
