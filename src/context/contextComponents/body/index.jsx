import React, {useContext} from 'react'
import { StudentContext } from '../../context'
export const ComponentIndex = () => {
  const [students, setStudents] = useContext(StudentContext);
  const onDelete = (id) => {
    let res = students.filter( (s) => s.id !== id)
    setStudents(res)
  };
  return (
    <div>
      <h2>Players: {students.length}</h2>
      {students.map( (s) => {
        return <h1 key={s.id}>
            {s.id}. {s.name} 
            <button onClick={()=>onDelete(s.id)}>Delete</button>
          </h1> 
      })}
    </div>
  )
}

export default ComponentIndex
