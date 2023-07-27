import React, {useMemo} from 'react'

export const Isfive = (props) => {
    const getData = useMemo( () => {
        if( props.count === 5 ) return "five digit"
        else return "not five digit"
    }, [props.count] )
  return (
    <div>{getData}</div>
  )
}

export default Isfive