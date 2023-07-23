import React, {useReducer} from "react";


export const HomeworkReduce = () => {
    const [count, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case "plus": return state+1;
            case "minus": return state-1;
            default: return state
        }
    }, 0)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={dispatch({type:"plus"})}>Plus</button>
        <button onClick={dispatch({type:"plus"})}>Minus</button>
    </div>
  )
}

export default HomeworkReduce 
