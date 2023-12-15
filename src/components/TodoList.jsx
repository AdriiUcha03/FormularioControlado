import Todo from './Todo';

const TodoList = ({ todos, deleteTodo , updateTodo, editTodo}) => {
  return (
    <div>
    <h1 className='text-center'>Lista de tareas</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;