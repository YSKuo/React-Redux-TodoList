import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './redux/selectors';
import { getTodosFromLocalStorage } from './redux/actions';
import Header from "./components/Header";
import TodoInput from './components/TodoInput';
import TodosInfo from './components/TodoInfo';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      dispatch(getTodosFromLocalStorage(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <TodoInput />
      <TodosInfo />
    </>
  );
}

export default App;
