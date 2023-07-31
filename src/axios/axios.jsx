import React, {useEffect} from 'react'
import axios from 'axios'

const Axios = () => {
    useEffect( () => {
        axios( {
            url: "https://jsonplaceholder.typicode.com/users",
            method:"POST",
            body: { name: 'xon' },
            headers: {},
            timeout: 10000,
        } ).then( res => console.log(res, 'axios') )
    }, [] )
  return (
    <div>
        <h1>Axios</h1>
    </div>
  )
}

export default Axios