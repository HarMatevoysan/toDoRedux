import ToDoService from "../service"
import * as types from "./actionTypes"

const defaultState = {
   todo: []
}


const todoReducer = (state = defaultState, action) => {

   switch (action.type) {
      case types.FETCH_TODOS:
         return {
            ...state,
            todo: action.payload
         }

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
            state, todo: state.todo.map(t => {
               return t.id === action.payload.id
                  ? { ...t, title: action.payload.editText }
                  : t
            })
         }

      case types.CLEAR_COMPLETE_TODOS:
         return { ...state, todo: [...state.todo.filter(t => !t.complited)] }

      default: return state
   }


}

export default todoReducer