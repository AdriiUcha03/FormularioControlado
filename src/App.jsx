import {useState } from 'react'
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
  // Estado - Para realizar la edicion
  const [edit, setEdit] = useState()

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

  //Con esto podemos seleccionar el objeto al que se le a dado para editar y pasarlo al formulario
  const editTodo = (id) => {
    const taskToEdit = todos.find((todo) => todo.id === id); //Seleccionamos el que tenga el mismo id 
    console.log(taskToEdit)
    //Lanzamos el dato para que lo recoja así el useeffect en el formulario
    setEdit(taskToEdit)
    deleteTodo(id)
  };



  return (
    <>
      <div className='container'>
          <h1>Formulario Controlado</h1>
          <FormControlado addTodo = {addTodo} edit={edit}/>
        <TodoList todos={todos} deleteTodo= {deleteTodo} updateTodo = {updateTodo} editTodo={editTodo}/>
      </div>
      
    </>
  )
}

export default App
