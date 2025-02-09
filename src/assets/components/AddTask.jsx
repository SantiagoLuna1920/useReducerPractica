import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState('');
  return (
    <nav>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        style={{width: '300px', height: '33px'}}
        placeholder='Agregar tarea'
        type="text" />
        <button onClick={(e) => {
            addTask(text);
            setText('');
            e.stopPropagation();
        }}>Agregar</button>
    </nav>
  )
}

export default AddTask