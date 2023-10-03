import { useState } from "react";

import './App.css'

//Componentes essenciais para o projeto.
import Todo from "./components/Todo";

import TodoForm from "./components/TodoForm";

import Search from "./components/Search";

import Filter from "./components/Filter";


function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text: "funcionalidade x",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }
  ];

  setTodos(newTodos);

  };
  //Remover tarefas
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  }

  //Completar tarefa
  const completeTodo = (id) =>  {
    const newTodos =[...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter}/>
    <div className="todo-list">
      {todos
      //Filtro para tarefas completas & tarefas completas
      .filter((todo) => filter === "All" 
      ? true 
      : filter === "Completed" 
      ? todo.isCompleted 
      : !todo.isCompleted)
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>
}

export default App