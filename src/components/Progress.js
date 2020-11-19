import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/selectors';

const Progress = () => {
  const todos = useSelector(selectTodos);

  const numTodos = todos.length;
  const numCompleted = todos.filter(todo => todo.isCompleted).length;
  const numUncomplete = todos.filter(todo => !todo.isCompleted).length;
  let percent;
  if (numTodos === 0) {
    percent = 0;
  } else {
    percent = Math.round(numCompleted / numTodos * 10000) / 100;
  }
  
  return (
    <div>
      <h5>Your Progress</h5>
      <div className="progress">
        <div 
          className="progress-bar" 

          style={{width: percent +'%'}} 
          aria-valuenow={percent} 
          aria-valuemin="0" 
          aria-valuemax="100"
        >
          {percent}%
        </div>
      </div>
      <p>
        <span>
          {numUncomplete}
        </span> item(s) left
      </p>
    </div>
  );
}

export default Progress;