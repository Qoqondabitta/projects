import React, {useReducer} from "react";


const Reducer = ()=>{
    const [count, dispatch] = useReducer( (state, action)=>{}, 0 )
    return <div>
        <h1>useReducer</h1>
        <h2>{count}</h2>
    </div>
}