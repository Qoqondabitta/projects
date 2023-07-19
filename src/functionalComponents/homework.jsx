import React, {useState, useEffect} from "react"

const Lesson8 = ()=>{
    const [count, setCount] = useState(1)
    // !1
    // useEffect(()=>{
    //     console.log('first');
    // }, [])
    // !2
    // useEffect(()=>{
    //     console.log('first');
    // })
    // !3
    useEffect(()=>{
        console.log('first');
    }, [count])
    const [name, setName] = useState('')
    console.log(count);
    return (
        <div>
            <h1>Functional Components</h1>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Plus</button>
            <input type="text" placeholder="Enter your name, please" onChange={({target:{value}})=>{setName(value)}} />
            <h2>{name}</h2>
        </div>
    )
}

export default Lesson8