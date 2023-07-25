import React, {createContext, useReducer} from "react";
import { useContext } from "react";
import reducer from "./reducer";
export const StudentContextThird = createContext()
export const UseStudentContextThird = () => useContext(StudentContextThird);

export const StudentListThird = ({children}) => {
    const [students, dispatch] = useReducer( reducer, 
        [
          {id : 2, name: "Lionel Messi", age : 36, trophy : 44 },
        ] 
      )
  return <StudentContextThird.Provider value={[students, dispatch]}>
    {children}
  </StudentContextThird.Provider>
}

export default StudentListThird
