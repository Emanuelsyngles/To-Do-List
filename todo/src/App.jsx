import { useState } from 'react'


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

  return (
    <div>Olá react!</div>
  )
}

export default App
