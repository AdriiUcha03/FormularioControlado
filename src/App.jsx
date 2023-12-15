import { useState } from 'react'
import FormControlado from './components/FormularioControlado'
import TodoList from './components/TodoList'

//Emular la parte logica

const initialstate = [
  { 
    id: 1,
    title: "todo 01",
    description: "description 01",
    state: false,
    priority: false 
  },{
    id: 2,
    title: "todo 02",
    description: "description 02",
    state: false,
    priority: false   
  }
]
  
function App () {
  
  // Estado - Lista de componentes que se van agragando
  const [todos, setTodos] = useState(initialstate)

  //Funcion Añadir tarea
  const addTodo = todo => {
    setTodos([...todos,todo])
  }

  //Funcion De Eliminar
  const deleteTodo = id => {
    const newArray = todos.filter(todo =>  todo.id !== id )
    setTodos(newArray)
  }

  //Funcion Completar Tarea

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state; // Cambia entre true y false
      }
      return todo;
    });
    setTodos(newArray);
  };

  return (
    <>
      <div className='container'>
          <h1>Formulario Controlado</h1>
          <FormControlado addTodo = {addTodo}/>
      <TodoList todos={todos} deleteTodo= {deleteTodo} updateTodo = {updateTodo}/>
      </div>
      
    </>
  )
}

export default App
