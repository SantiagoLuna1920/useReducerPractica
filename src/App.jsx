
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './assets/components/ContactList'
import FormChat from './assets/components/FormChat'
import { useReducer } from 'react'
import { contacts, initialState, initialTasks, messengerReducer, messengerReducerTasks } from './assets/helpers/helpersStatesReducers'
import AddTask from './assets/components/AddTask'
import TaskList from './assets/components/TaskList'

function App() {

  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const [stateTask, dispatchTask] = useReducer(messengerReducerTasks, initialTasks);

  const message = state.messages[state.selectedId];
  const contactEmail = contacts.find((contactEmail) => contactEmail.id===state.selectedId);

  function addTask (task) {
dispatchTask({
  type: 'add_task',
  text: task
})
  }

  function editTextTask (text, id) {
    console.log(text);
    dispatchTask({
      type: 'edit_text_task',
      text: text,
      edit: id
    })
    
  }

  function editTask (task) {
console.log(task)
dispatchTask({
  type: 'edit_task',
  task: task,
  edit: task.edit
})
  }

  function editDone (task) {
dispatchTask({
  type: 'edit_done',
  task: task,
  done: task.done
})
  }

  function deleteTask (idDeleteTask) {
    console.log(idDeleteTask);
    dispatchTask({
      type: 'delete_task',
      id: idDeleteTask
    })
  }


  return (
    <>
      <h1>Practica de useReducer</h1>
      <br />
    <hr />
    <hr />
    <div  >
      <div className='container'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<ContactList contacts={contacts}
dispatch={dispatch}
selectedId={state.selectedId}
/>
<FormChat
message={message}
contactEmail={contactEmail}
dispatch={dispatch}
/>
    </div>
    <br />
    <hr />
    <hr />
    <br /><br />
    <div>
<AddTask
addTask={addTask} 
/>
<br />

<TaskList
editTextTask={editTextTask}
editDone={editDone}
stateTask={stateTask}
editTask={editTask}
deleteTask={deleteTask}
/>
    </div>
    </>
  )
}

export default App
