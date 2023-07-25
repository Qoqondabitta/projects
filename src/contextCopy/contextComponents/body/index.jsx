import React from 'react'
import { StudentContext, UseStudentContext } from '../../context/context'
export const ComponentIndex = () => {
  const [students, dispatch] = UseStudentContext();
  // const [students, dispatch] = useContext(StudentContext);
  return (
    <div>
      <h2>Players: {students.length}</h2>
      { students.map( (s) => {
        return <h1 key = { s.id } >
            { s.id }. { s.name } 
            <button onClick={ () => dispatch( { type : "delete", id : s.id } ) }>Delete</button>
          </h1> 
      })}
    </div>
  )
}

export default ComponentIndex
