import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo, editTodo }) => {
  // Función de comparación para ordenar las tareas
  const compareTasks = (a, b) => {
    // Primero, colocar las tareas completadas al final, independientemente de la prioridad
    if (a.state && !b.state) {
      return 1;
    }
    if (!a.state && b.state) {
      return -1;
    }
  
    // Segundo, ordenar por prioridad (tareas con prioridad primero)
    if (b.priority && !a.priority) {
      return 1;
    }
    if (a.priority && !b.priority) {
      return -1;
    }
  
    // Finalmente, ordenar por ID (si tienen la misma prioridad y estado)
    return a.id - b.id;
  };

  // Ordenar las tareas usando la función de comparación
  const sortedTodos = [...todos].sort(compareTasks);

  return (
    <div>
      <h1 className='text-center'>Lista de tareas</h1>
      <ul>
        {sortedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;