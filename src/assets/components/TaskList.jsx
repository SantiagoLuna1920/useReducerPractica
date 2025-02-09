import React from 'react'

const TaskList = ({stateTask, editTask, editDone, deleteTask, editTextTask}) => {

    let content =  stateTask.map((task) => {
        if(task.edit) {
return <tr key={task.id}>
<td>
    <input id={task.id}  type="checkbox" checked={task.done}
    onChange={() => {
       editDone(task);
    }}
    />
</td>
<td><label htmlFor={task.id}>
<input type="text" value={task.text} onChange={(e) => editTextTask(e.target.value, task.id)} />
    </label></td>
<td> <button onClick={() => {
    editTask(task);
}}>Guardar</button> </td>
<td> <button onClick={() => deleteTask(task.id)}>Eliminar</button> </td>
</tr>
        } else {
 return <tr key={task.id}>
                <td>
                    <input id={task.id}  type="checkbox" checked={task.done}
                    onChange={() => {
                       editDone(task);
                    }}
                    />
                </td>
                <td><label htmlFor={task.id}>
                {task.text}
                    </label></td>
                <td> <button onClick={() => {
                    editTask(task);
                }}>Editar</button> </td>
                <td> <button onClick={() => deleteTask(task.id)}>Eliminar</button> </td>
            </tr>
        }
    })
    

  return (
    <table onSubmit={(e) => {
        e.preventDefault();
    }}>
        <tbody>
            {content}
        </tbody>
    </table>
  )
}

export default TaskList