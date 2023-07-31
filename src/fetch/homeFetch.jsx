import React, { useEffect } from 'react'

const HomeFetch = () => {
    // ! POST = add new info to backend
    // ! PUT = update particular info in backend
    // ! GET = get particular info from backend
    // ! DELETE = delete particular info from the backend
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: "GET",
            headers: {
                Type:"application/json"
            },
            // body: JSON.stringify( { name: "me", title: "number one, ALHAMDULILLAH" } )
        }
        ).then( res => { return ( res = res.json() ) }  ).then( res => console.log(res) )
    }, [] )
  return <div></div>
}

export default HomeFetch