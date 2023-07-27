import React, {useMemo} from 'react'

const IsFive = (props) => {
    const getData = useMemo( () => {
        let i = 0;
        while( i < 100 ){
            i++
        }
        if( props.count === 5 ) return '5 digit'
        else return 'not 5 digit'
    }, [props.count] )        
  return (
    <div>{getData}</div>
  )
}

export default IsFive