import { ADD_USER } from '../actionTypes';

const initialState = {
  users: [],
}

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, {
          name: action.payload.name
        }]
      }
    }

    default: {
      return state;
    }
  }
}
