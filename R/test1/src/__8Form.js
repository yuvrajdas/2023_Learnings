import React, { useState } from 'react'

const __8Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const submitForm = (e)=>{
        e.preventDefault();
        console.log(name, email);
    }
  return (
    <>
        <h1>Form</h1>
        <form onSubmit={submitForm}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default __8Form