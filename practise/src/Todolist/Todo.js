import React, { useState } from 'react'

const Todo = () => {
  const [first, setfirst] = useState("")
  const [Display, setDisplay] = useState([])
  function Click(){
    setDisplay([...Display,first])
    setfirst("")
  }
  return (
    <div>
        <input type="text" onChange={(e)=>setfirst(e.target.value)} value={first} />
        <button onClick={Click}>Submit</button>
        <ol>
          {Display.map((x,index)=>(
            <li  key={index}>{x}</li>
          ))}
          </ol>
    </div>
  )
}

export default Todo
