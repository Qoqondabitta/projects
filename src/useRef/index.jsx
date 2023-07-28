import React, {useState, useEffect} from 'react'

const UseRef = () => {
    console.log('working');
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)
    const Add = () => {
        setCount( count + 1 )
    }
    useEffect()
  return (
    <div>
        <h1>UseRef</h1>
        <input type="text" onChange={ ( { target: { value } } ) => { setTitle(value); Add() } } />
        <h2>My name is {title}</h2>
        <h2>{ count } times rendered</h2>
    </div>
  )
}

export default UseRef