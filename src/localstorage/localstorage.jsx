import React, {useState} from 'react'

// localStorage.setItem("aim", "perfectness")
export const Localstorage = () => {
    const [aim, setAim] = useState(localStorage.getItem("aim"))
  return (
    <div>
        <h1>Localstorage</h1>
        <h2>{localStorage.getItem("aim")}</h2>
        <input type="text" onChange={ ({target:{value}}) => {
            setAim(value);
            localStorage.setItem('aim', value)
        } } />
        <button onClick={()=>{localStorage.removeItem('aim');setAim('')}}>Delete</button>
    </div>
  )
}

export default Localstorage