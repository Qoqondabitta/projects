import React from 'react'

export const Count = React.memo( (props) =>{
  console.log(`${props.id}`);
  return <span>{props.count}</span>
}, (prevProps, nextProps) => {
  console.log(prevProps);
  console.log(nextProps);
} )

export default Count
