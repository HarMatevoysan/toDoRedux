import React from "react";
import { ToDoItem } from "../index"
import { useDispatch, useSelector } from "react-redux";
import { clearCompetedTodos, completeTodo, updateTodo } from './../../redux/action';

const TodoList = () => {
   const dispatch = useDispatch()
   const state = useSelector((state) => ({ ...state.todo }))
   const completedSize = state.todo.filter(t => t.complited).length
   return (
      <div >
         {state.todo.map(todo => {
            return <ToDoItem
               todo={todo}
               id={todo.id}
               key={todo.id}
               text={todo.text}
               complited={todo.complited}
            />
         })}
         <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <div>{completedSize}/{state.todo.length} Completed</div>
            <button
               disabled={completedSize ? false : true}
               onClick={() => dispatch(clearCompetedTodos(state.todo))}
            >
               Clear completed
            </button>
         </div>
      </div>
   );
}

export default TodoList;