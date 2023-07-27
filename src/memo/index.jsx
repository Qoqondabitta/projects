import React, {useState} from 'react'
import Count from './component/count'
import Isfive from './component/isFive'

export const Memo = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
  return (
    <div>
        <h1>Memo</h1>
        <div style={{display: "flex", gap: "15px"}}></div> <br />
        <button onClick={ () => setCount( count + 1 ) }>Plus</button>
        <Count id={1} count={count} />
        <div style={{display: "flex", gap: "15px"}}></div> <br />
        <button onClick={ () => setCount1( count1 + 1 ) }>Plus</button>
        <Count id={2} count={count1} />
        <Isfive count={count1} />
    </div>
  )
}

export default Memo
