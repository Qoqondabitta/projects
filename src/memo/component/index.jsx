import React, {useState} from 'react'
import Count from './count'

export const Memo = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
  return (
    <div>
        <h1>Memo</h1>
        <button>Plus</button>
        <Count id={1} count={count} />
        <button>Plus</button>
        <Count id={1} count={count1} />
    </div>
  )
}

export default Memo
