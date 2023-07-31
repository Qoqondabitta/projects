import React, { useEffect } from 'react'

const Fetch = () => {
    useEffect( () => {
        fetch( "https://jsonplaceholder.typicode.com/" ).then( 
            (res) => {return ( res = res.json() )} 
        ).then( (res) => { console.log( res, ' fetch ' ) } )
    }, [] )
  return (
    <div>
        <h1>Fetch</h1>
    </div>
  )
}

export default Fetch