import React, {useContext} from 'react'
import { StudentContext } from '../../context'
import { HeaderContainer, HeaderItem } from './style'

export const ContextHeader = () => {
  const [students] = useContext(StudentContext)
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
