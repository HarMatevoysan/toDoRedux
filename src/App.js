import { ToDoList } from './components';
import { useEffect, useState } from 'react';
import { addTodo, fetchTodos } from './store/action';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App () {
   const state = useSelector(state => ({ ...state }))
   const [text, setText] = useState("")
   const dispatch = useDispatch()

   const addTodos = () => {
      dispatch(addTodo(text))
      setText("")
   }
   useEffect(() => {
      dispatch(fetchTodos())
   }, [])

   return (
      <div className="contenir">
         <div className='title'>ToDo List </div>
         <form className='form' onSubmit={(e) => e.preventDefault()}>
            <input
               onChange={(e) => setText(e.target.value)}
               type='text'
               value={text}
               placeholder='Text are here'
            />
            <button onClick={addTodos}>Add</button>
         </form>
         <div>
            {state.todo.todo.length

               ? <div>
                  <ToDoList />
               </div>
               : <div className='todo-text'>No ToDos</div>
            }
         </div>
      </div>
   );
}

export default App;
