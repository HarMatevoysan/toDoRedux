import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ToDoList } from './components';
import { useEffect, useState } from 'react';
import { addTodo } from './redux/action';

function App () {
   const [text, setText] = useState("")
   const state = useSelector(state => ({ ...state }))
   const dispatch = useDispatch()

   const addTodos = () => {
      dispatch(addTodo(text))
      setText("")
   }

   return (
      <div className="contenir">
         <div className='title'>ToDo List </div>
         <form className='form' onSubmit={(e) => e.preventDefault()}>
            <input onChange={(e) => setText(e.target.value)} type='text' value={text} placeholder='text are here' />
            <button onClick={addTodos}>Add</button>
         </form>
         <div>
            {state.todo.todo.length

               ? <div>
                  <ToDoList />
               </div>
               : <div style={{ textAlign: 'center', fontSize: "30px", color: 'red' }}>No ToDos</div>
            }
         </div>
      </div>
   );
}

export default App;
