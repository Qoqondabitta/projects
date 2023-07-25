import React from 'react'
import Wrap from './index'
import MainContext from './context'

export const Root2 = () => {
  return (
    <div>
      <MainContext>
        <Wrap />
      </MainContext>            
    </div>
  )
}

export default Root2