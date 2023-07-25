import React from 'react'
import { UseStudentContext } from '../../context/context'
import { UseStudentContextSecond } from '../../context/context_second'
import { UseStudentContextThird } from '../../context/context_third'
import { HeaderContainer, HeaderItem } from './style'

export const ContextHeader = () => {
  const [students, dispatch] = UseStudentContext()
  const [students2, dispatch2] = UseStudentContextSecond()
  const [students3, dispatch3] = UseStudentContextThird()
  console.log(students2);
  console.log(students3);
  return (
    <HeaderContainer>
        <HeaderItem>Players <span>{students.length}</span></HeaderItem>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Contact</HeaderItem>
        <HeaderItem>Service</HeaderItem>
    </HeaderContainer>
  )
}

export default ContextHeader
