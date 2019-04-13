import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
  todos: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index ? {...todos, completed: !todo.completed}
          : todo
      )
      }
      default:
      return state;
  }
}
