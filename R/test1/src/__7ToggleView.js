import React, { useState } from 'react'

const __7ToggleView = () => {
    const [state, setState] = useState(true);
  const toggle = ()=>{
    setState(!state);
  }

  return (
    <>
       {console.log(state)}
        {state?<span>Visible</span>:''} 
        <br />
        <button onClick={toggle}>Toggle</button>
    </>
  )
}

export default __7ToggleView