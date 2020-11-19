import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './redux/selectors';
import Header from "./components/Header";
import TodoInput from './components/TodoInput';
import TodosInfo from './components/TodoInfo';

function App() {

  return (
    <>
      <Header />
      <TodoInput />
      <TodosInfo />
    </>
  );
}

export default App;
