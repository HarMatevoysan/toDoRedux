import { ToDoItem } from "../index"
import { useDispatch, useSelector } from "react-redux";
import { clearCompetedTodos } from '../../store/action';
import "./ToDoList.css"

const TodoList = () => {
   const dispatch = useDispatch()
   const state = useSelector((state) => ({ ...state.todo }))
   const completedSize = state.todo.filter(t => t.complited).length

   const clearCompetedTodosBtn = () => {
      dispatch(clearCompetedTodos(state.todo))
   }
   const toDoItem = state.todo.map(todo => {
      return <ToDoItem
         todo={todo}
         id={todo.id}
         key={todo.id}
         text={todo.title}
         complited={todo.complited}

      />
   })
   return (
      <div >
         {toDoItem}
         <div className="done__btn">
            <div>{completedSize}/{state.todo.length} Completed</div>
            <button
               disabled={completedSize ? false : true}
               onClick={clearCompetedTodosBtn}
            >
               Clear completed
            </button>
         </div>
      </div>
   );
}

export default TodoList;