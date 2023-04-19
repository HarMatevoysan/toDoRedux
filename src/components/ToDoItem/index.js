import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, completeTodo } from "../../store/action";
import "./ToDoItem.css"


function ToDoItem ({ todo, id, text, complited }) {
   const dispache = useDispatch()
   const [isEdit, setIsEdit] = useState(false)
   const [editText, setEditText] = useState(text)

   const saveTodo = (e) => {
      e.preventDefault()
      dispache(updateTodo({ id, editText }))
      setIsEdit(false)
   }
   const removeTodos = () => {
      dispache(removeTodo(todo.id))
   }
   const doneTodos = () => {
      dispache(completeTodo(todo))
   }
   return (
      <div className={complited ? "todo__item done" : "todo__item"}>
         {isEdit
            ? (
               <form onSubmit={saveTodo}>
                  <input
                     type="text"
                     value={editText}
                     onChange={(e) => setEditText(e.target.value)}
                  />
                  <button>Save</button>
               </form>
            ) : (<div>
               {text}
               <button onClick={removeTodos}>Remove</button>
               <button onClick={() => setIsEdit(true)}>Edit</button>
            </div>)
         }


         <button
            className='done__bnt'
            onClick={doneTodos}
         >
            {complited ? "Complited" : "Done"}
         </button>

      </div >
   );
}

export default ToDoItem;