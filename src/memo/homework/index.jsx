import React, {useState} from 'react'
import Count from '../component/count'
import IsFive from './homecomponent/isFive'


export const Memo = () => {
    const [ count, setCount] = useState(0)
    const [ count2, setCount2] = useState(0)
    return (
    <div>
        <div>
            <button onClick={ () => setCount( count + 1 ) } >Plus</button>
            <Count id={1} count={count} /> 
        </div>
        <div>
            <button onClick={ () => setCount2( count2 + 1 ) } >Plus</button>
            <Count id={2} count={count2} /> 
            <IsFive count={count2} />
        </div>
    </div>
    )
}

export default Memo
