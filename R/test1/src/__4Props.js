import React from 'react'

const __4Props = (props) => {

    console.log("props",props)
    return (
        <>
        <h1>Props</h1>
        <h2>{props.details.name}</h2>
        <h3>{props.details.prof}</h3>
        <h4>{props.details.city}</h4>
        <h4>{props.details.epx}</h4>
    </>
  )
}

export default __4Props