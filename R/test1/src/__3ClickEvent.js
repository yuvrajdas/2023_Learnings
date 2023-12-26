import React, { useState } from 'react'

const __3ClickEvent = () => {

    let [state, setState] = useState(0);
    
    let increment = ()=>{
        setState(state+=1)
    }

    let decrement = ()=>{
        if(state === 0){
            return;
        }
        setState(state-=1)
    }

  return (  
    <>
        <h1>{state}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default __3ClickEvent