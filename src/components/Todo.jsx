import React from 'react';

const Todo = ({ todo , deleteTodo, updateTodo, editTodo}) => {
  const { id, title, description, state, priority } = todo;

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between align-items-start'>
        <div>
          <h5 className={state ? 'completada' : ''}>{title}</h5>
          <p>{description}</p>
          <div className=''>
            {/* Utilizamos en onClick {() => funcion}, para que no se ejecute nada mas cuando se pulsa */}
            <button className='btn btn-sm btn-danger' onClick={() => deleteTodo(id)}>Eliminar</button>
            <button className='btn btn-sm btn-warning' onClick={() => editTodo(id)}>Editar</button>
            <button className='btn btn-sm btn-primary' onClick={() => updateTodo(id)}>Actualizar</button>
          </div>
        </div>
        {priority && <span className='badge badge-primary'>Prioridad</span>}
      </div>
    </li>
  );
};

export default Todo;