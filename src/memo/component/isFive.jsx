import React, {useCallback, useMemo} from 'react'

export const Isfive = React.memo((props) => {
  console.log('isFive');
    // const getData = useMemo( () => {
    //     if( props.count === 5 ) return "five digit"
    //     else return "not five digit"
    // }, [props.count] )
    const getData = useCallback( (me) => {
      if( props.count === 5 ) return `five digit ${me}`
      else return "not five digit"
  }, [props.count] )
  return (
    <div>{getData('me')}</div>
  )
})

export default Isfive