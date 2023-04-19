import axios from "axios"
import * as types from "./actionTypes"

export const completeTodo = (todo) => ({
   type: types.COMPLETE_TODO,
   payload: todo
})

export const addTodo = (todo) => ({
   type: types.ADD_TODO,
   payload: todo
})

export const removeTodo = (todo) => ({
   type: types.REMOVE_TODO,
   payload: todo
})

export const updateTodo = (todo) => ({
   type: types.UPDATE_TODO,
   payload: todo
})

export const clearCompetedTodos = (todo) => ({
   type: types.CLEAR_COMPLETE_TODOS,
   payload: todo
})

const fetchTodoData = (todo) => ({
   type: types.FETCH_TODOS,
   payload: todo
})

export const fetchTodos = () => {
   return function (dispatch) {
      axios
         .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
         .then((response) => {
            const todos = response.data
            dispatch(fetchTodoData(todos))
         })
   }
}