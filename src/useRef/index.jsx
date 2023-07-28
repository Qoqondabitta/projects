import React, {useState, useEffect, useRef} from 'react'

const UseRef = () => {
    console.log('working');
    // const [title, setTitle] = useState('')
    // let current = useRef(0)
    // console.log(current);
    // const [count, setCount] = useState(0)
    // const Add = () => {
    //     setCount( count + 1 )
    // }
    // =========================calculating the render time with useEffect============================
    // useEffect(
    //   () => {
    //     current.current = current.current + 1;
    //     // setCount( count + 1 )
    //   }, [title]
    // )
    // ================================================================================================
    // ===============================getting element by useEffect=====================================
    // useEffect( () => {
    //   let h1 = document.querySelector("h1")
    //   console.log(h1);
    // } )
    // ================================================================================================
    // ========getting element with DOM strategy, but component should be rendered to get element======
    // let h1 = document.querySelector("h1")
    // console.log(h1);
    // ================================================================================================
    // ====================The optimal way of getting element with useRef==============================
    const domainName = useRef()
    const show = () => {
      console.log(domainName.current);
    }
  return (
    <div>
        <h1 ref={domainName}>UseRef</h1>
        <button onClick={ show }>show</button>
        {/* <input type="text" onChange={ ( { target: { value } } ) => { setTitle(value);} } /> */}
        {/* <h2>My name is {title}</h2> */}
        {/* <h2>{ current.current } times rendered</h2> */}
    </div>
  )
}

export default UseRef