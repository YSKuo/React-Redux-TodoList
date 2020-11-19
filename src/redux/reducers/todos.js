import { ADD_TODO, DELETE_TODO, EDIT_TODO, DELETE_COMPLETED_TODOS, CLICK_CHECKBOX, CHANGE_ALL_TODOS_STATUS } from '../actionTypes';

const initialState = {
  todos: []
};

export default function todosReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          content: action.payload.content,
          isCompleted: false,
        }]
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos
          .filter(todo => todo.id !== action.payload.id)
      }
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          // id 吻合就放上新的 content
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              content: action.payload.content
            }
          }
          // id 不吻合就不進行改變直接回傳
          return todo;
        })
      }
    }
    case DELETE_COMPLETED_TODOS: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isCompleted)
      }
    }
    case CLICK_CHECKBOX: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted
            }
          }
          return todo
        })
      }
    }
    case CHANGE_ALL_TODOS_STATUS: {
      const allCompleted = state.todos
        .every(todo => todo.isCompleted);
      return {
        ...state,
        todos: state.todo.map(todo => ({
          ...todo,
          isCompleted: !allCompleted
        }))
      }
    }
    default: {
      return state;
    }
  }
};
