import React, { useContext } from 'react'
import { userContext } from './Context'

const Count2 = () => {
    const{counter}=useContext(userContext)
  return (
    <div>
        <h1>Counter Value:{counter}</h1>
    </div>
  )
}

export default Count2