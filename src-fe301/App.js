import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './redux/selectors';
import AddTodo from './AddTodo';
import { deleteTodo } from './redux/actions';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <AddTodo />
      <ul>
        {todos.map(todo => (
          <li>
            {todo.id} {todo.name}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
