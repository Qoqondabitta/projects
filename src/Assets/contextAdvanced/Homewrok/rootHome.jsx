import React from 'react'
import Content from '.'
import ContextHome from './contextHome'

export const rootHome = () => {
  return (
    <div>
        <ContextHome >
            <Content />
        </ContextHome>
    </div>
  )
}
