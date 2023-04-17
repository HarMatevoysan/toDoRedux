import React, { useState } from "react";
import "./ToDoItem.css"
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, completeTodo } from "../../redux/action";

function ToDoItem ({ todo, id, text, complited }) {
   const dispache = useDispatch()
   const [isEdit, setIsEdit] = useState(false)
   const [editText, setEditText] = useState(text)

   const saveTodo = (e) => {
      e.preventDefault()
      dispache(updateTodo({ id, editText }))
      setIsEdit(false)
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
               <button onClick={() => dispache(removeTodo(todo.id))}>Remove</button>
               <button onClick={() => setIsEdit(true)}>Edit</button>
            </div>)
         }


         <button
            style={{ border: "none", backgroundColor: "red", color: "white", float: "right" }}
            onClick={() => dispache(completeTodo(todo))}
         >
            {complited ? "Complited" : "Done"}
         </button>

      </div >
   );
}

export default ToDoItem;