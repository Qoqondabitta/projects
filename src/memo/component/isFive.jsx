import React from 'react'

export const Isfive = (props) => {
    const getData = () => {
        let i = 0;
        while(i < 1000000){
            i++
        }
        if( props.count === 5 ) return "five digit"
        else return "not five digit"
    }
  return (
    <div>{getData()}</div>
  )
}

export default Isfive