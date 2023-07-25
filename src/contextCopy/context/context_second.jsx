import React, {createContext, useReducer} from "react";
import { useContext } from "react";
import reducer from "./reducer";
export const StudentContextThird = createContext()
export const UseStudentContextSecond = () => useContext(StudentContextThird);

export const StudentListSecond = ({children}) => {
    const [students, dispatch] = useReducer( reducer, 
        [
          {id : 3, name: "Junior Neymar", age : 31, trophy : 20 },
          {id : 7, name: "Marko Reus", age : 32, trophy : 0 },
        ] 
      )
  return <StudentContextThird.Provider value={[students, dispatch]}>
    {children}
  </StudentContextThird.Provider>
}

export default StudentListSecond
