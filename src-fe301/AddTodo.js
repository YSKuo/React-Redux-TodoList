import { useState } from 'react';
import { addTodo } from './redux/actions';
import { connect } from 'react-redux';

// dumb component / component
function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button 
        onClick={() => {
          addTodo(value);
          setValue('');
        }}
      >
        add todo
      </button>
    </>
  );
}

// 類似 selector
const mapStateToProps = (store) => {
  return {
    todos: store.todoState.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);