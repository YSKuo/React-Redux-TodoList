import { combineReducers } from 'redux';
import todos from './todos';
import users from './users';

// 把所有 reducer 引進來合體
export default combineReducers({ 
  todoState: todos, 
  users 
});
