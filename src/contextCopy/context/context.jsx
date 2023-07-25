import React, {createContext, useReducer} from "react";
import { useContext } from "react";
import reducer from "./reducer";
export const StudentContext = createContext()
export const UseStudentContext = () => useContext(StudentContext);

export const StudentList = ({children}) => {
    const [students, dispatch] = useReducer( reducer, 
        [
          {id : 1, name: "Turgunaliev abdulakhad", age: 17, trophy: 1 },
          {id : 2, name: "Lionel Messi", age : 36, trophy : 44 },
          {id : 3, name: "Junior Neymar", age : 31, trophy : 20 },
          {id : 4, name: "Cristiano Ronaldo", age : 39, trophy : 27 },
          {id : 5, name: "Carlos Puyol", age : 50, trophy : 18 },
          {id : 6, name: "Ronaldinho", age : 44, trophy : 30 },
          {id : 7, name: "Marko Reus", age : 32, trophy : 0 },
        ] 
      )
  return <StudentContext.Provider value={[students, dispatch]}>
    {children}
  </StudentContext.Provider>
}

export default StudentList
