import { createStore } from 'redux';
import * as types from "./actionTypes"

const defaultState = {
   todo: [
      { id: 1, text: 'Learn Redux', complited: true },
      { id: 2, text: 'Buy clothing', complited: false },
      { id: 3, text: 'Learn React', complited: true },
      { id: 4, text: 'Learn TypeScript', complited: false },
      { id: 5, text: 'Buy shoes', complited: false },
      { id: 6, text: 'Learn JavaScprit', complited: true },
      { id: 7, text: 'Go to school', complited: false },
      { id: 6, text: 'Read Books', complited: false },
   ]
}

const todoReducer = (state = defaultState, action) => {

   switch (action.type) {

      case types.COMPLETE_TODO:
         return {
            ...state, todo: state.todo.map((t) => {
               return t.id === action.payload.id
                  ? { ...action.payload, complited: !action.payload.complited }
                  : t
            })
         }

      case types.ADD_TODO:
         const newTodo = {
            id: Date.now(),
            text: action.payload,
            complited: false
         }
         return { ...state, todo: [...state.todo, newTodo] }

      case types.REMOVE_TODO:
         return { ...state, todo: state.todo.filter(t => t.id !== action.payload) }

      case types.UPDATE_TODO:
         return {
            ...state, todo: state.todo.map(t => {
               return t.id === action.payload.id
                  ? { ...state, text: action.payload.editText }
                  : t
            })
         }
      case types.CLEAR_COMPLETE_TODOS:
         return { ...state, todo: state.todo.filter(t => !t.complited) }

      default: return state
   }

}

export default todoReducer