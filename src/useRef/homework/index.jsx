import React, {useRef} from 'react'
import "./index.css"

const Latta = () => {
    const move = useRef()
    const goNext = () => {
        move.current.style.transform = "translateX(100px)";
    }
  return (
    <div>
        <div className='container'>
            <img id='one' ref={move} src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80" alt="" />
            <img id='two'  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img id='one' src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <button>Previous</button>
        <button onClick={goNext}>Next</button>
    </div>
  )
}

export default Latta