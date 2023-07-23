import React from 'react'
import ComponentIndex from './contextComponents/body'
import ContextHeader from './contextComponents/header'

export const Wrap = () => {
  return (
    <div>
        <ContextHeader />
        <ComponentIndex />
    </div>
  )
}

export default Wrap
