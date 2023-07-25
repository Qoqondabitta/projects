import React from 'react'
import {StudentListSecond} from "./context_second"
import {StudentListThird} from "./context_third"
import {StudentList} from "./context"

export const MainContext = ( {children} ) => {
  return (
    <div>
        <StudentListThird>
            <StudentListSecond>
                <StudentList>
                    {children}
                </StudentList>
            </StudentListSecond>
        </StudentListThird>
        
    </div>
  )
}

export default MainContext