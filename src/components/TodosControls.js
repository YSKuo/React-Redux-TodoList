import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectFilter } from '../redux/selectors';
import { deleteCompletedTodos, changeAllTodosStatus, pickFilter } from '../redux/actions';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

const TodosControls = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const completeAllToggleText = todos.every((todo) => todo.isCompleted) ? 'Uncomplete all' : 'Complete all';

  return (
    <div className="row todos__controls justify-content-between">
      <div className="btn-group btn-group-toggle mt-2" >
        <label className={classNames('btn btn-secondary', {active: filter === 'all'})}>
          <input type="radio" name="filter" value="all" 
            checked={filter === 'all'} 
            onChange={(e) => dispatch(pickFilter(e.target.value))} 
          />
          All
        </label>
        <label className={classNames('btn btn-secondary', {active: filter === 'active'})}>
          <input type="radio" name="filter" value="active" 
            checked={filter === 'active'} 
            onChange={(e) => dispatch(pickFilter(e.target.value))} 
          />
          Active
        </label>
        <label className={classNames('btn btn-secondary', {active: filter === 'completed'})}>
          <input type="radio" name="filter" value="completed" 
            checked={filter === 'completed'} 
            onChange={(e) => dispatch(pickFilter(e.target.value))}
          />
          Completed
        </label>
      </div>

      <DropdownButton className="dropdown mt-2" id="dropdown-basic-button" title="Actions">
        <Dropdown.Item onClick={(e) => dispatch(changeAllTodosStatus())}>
          {completeAllToggleText}
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => dispatch(deleteCompletedTodos())}>
          Clear completed
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default TodosControls;