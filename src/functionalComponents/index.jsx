import React, { useState } from "react";

const Eight = ()=>{
    const [count, setCount] = useState(17);
    const [value, setValue] = useState('')
    return ( 
        <div>
            <h1>Functional  Component</h1>
            <h2>{value}</h2>
            <input type="text" placeholder="Enter Your Name" onChange={({target:{value}})=>{setValue(value)}} />
            <h2>{count} - is state</h2>
            <button onClick={()=>{
                setCount(count + 1);
                alert(`Do you really want to multiply ${count}`)
                }}
            >Plus</button>
            <button onClick={()=>{
                setCount(count - 1);
                alert(`Do you really want to supplement from ${count}`)
                }}
            >Minus</button>
        </div>
    )
}

export default Eight