import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid';

const InputTask = () => {
  const newTaskId = uuidv4();
  const [task, setTask] = useState('')
  const { listTask, setListTask } = useContext(Context);
  const handleClick = () => {
    setListTask([...listTask, {name: task, id: newTaskId, checked: false}]) 
    setTask('')
  }


   return (
    <div className='input-and-button'>
        <input className="inputField" type="text" placeholder='add details'onChange={e => setTask(e.target.value)} value={task}/>
        <button className="addButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default InputTask