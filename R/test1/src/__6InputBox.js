import React, { useState } from 'react'


const __6InputBox = () => {
    const [text, setText] = useState("");
    const [isVisible, setVisible] = useState(false);

    let handleEvent = (e)=>{
        console.log(e.target.value);
        setText(e.target.value)
    }

    let displayText = (e)=>{
        setVisible(true);
    }
    return (
    <>
        {isVisible?<h1>{text}</h1>:""}
        <input type="text" onChange={handleEvent}/>
        <button onClick={displayText}>Diplay</button>
    </>
  )
}

export default __6InputBox