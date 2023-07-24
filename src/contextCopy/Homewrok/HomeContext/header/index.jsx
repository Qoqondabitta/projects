import React, {useContext, useState} from 'react'
import ContextHome from '../../contextHome'
export const Hhpocontext = () => {
    const [ proverbs] = useState(useContext)
  return (
    <div style={{display: "flex", justifyContent: "space-between", color: "#fff", background: "#333"}}>
        <h1>Homes: {proverbs.length}</h1>
        <h1>About</h1>
        <h1>sERVICE</h1>
        <h1>Contacts</h1>
    </div>
  )
}
export default  Hhpocontext