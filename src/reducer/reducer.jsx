import React, {useReducer} from "react";


const Reducer = ()=>{
    const [count, dispatch] = useReducer( (state, action)=>{
        switch(action.type){
            case 'plus': return state + action.payload;
            default : return state
        }
    }, 0 )
    return <div>
        <h1>useReducer</h1>
        <h2>{count}</h2>
        <button onClick={ dispatch( { type: "plus", payload: 5 } ) }></button>
    </div>
}

export default Reducer