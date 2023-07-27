import React from 'react'

export const Count = React.memo( (props) =>{
    console.log(`${props.id} yes`);
  return (
    <div>{props.count}</div>
  )
}, (prevProps, nextProps) => {
    return console.log(prevProps, nextProps);
});

export default Count