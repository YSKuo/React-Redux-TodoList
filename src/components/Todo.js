import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, clickCheckbox, editTodo } from '../redux/actions';
import classNames from 'classnames';

const Todo = ({ todo }) => {
  // const todos = useSelector(selectTodos);
  const { id, content, isCompleted } = todo;
  const inputIsCompleted = classNames('todo__input form-control', {'todo__input-completed': isCompleted});
  const dispatch = useDispatch();

  return (
    <div className="todo input-group mb-1">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input 
            type="checkbox" 
            checked={isCompleted}
            onChange={() => dispatch(clickCheckbox(id))}
          />
        </div>
      </div>
      <input 
        type="text" 
        className={inputIsCompleted} 
        value={content}
        // id={id}
        // onChange={() => editTodo(id, content)}
      />

      <button 
        type="button" 
        className="clear-btn btn btn-outline-danger" 
        onClick={() => dispatch(deleteTodo(id))}
      >
        Clear
      </button>
    </div>
  );
}

export default Todo;