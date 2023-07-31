import React, {useEffect} from 'react'

const Fetch = () => {
    // ! POST = add new info
    // ! Delete = delete info
    // ! Put = as update info
    // ! Get = get info
    // any number starting with 200 means that you have got information from backend via fetch successfully
    // any number starting with 404 means you have got wrong or have mmistake in your code
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            // method: 'Get',
            method: 'POST',
            headers:{
                "Type" : "application.json"
            },
            // body: JSON.stringify( {name: "web", year: 4 } )
        } ).then( res => { return ( res = res.json() ) } ).then( res => console.log( res ) )
    }, [] )
  return (
    <div>

    </div>
  )
}

export default Fetch