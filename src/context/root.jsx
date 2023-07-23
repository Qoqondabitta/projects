import React from 'react'
import Wrap from './index'
import { StudentContext, StudentList } from './context'

export const Root = () => {
  return (
    <div>
      <StudentList>
        <Wrap />
      </StudentList>
    </div>
  )
}

export default Root