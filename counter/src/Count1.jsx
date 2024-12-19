import React, { useContext } from 'react'
import { userContext } from './Context'

const Count1 = () => {
    const{counter,setCounter}=useContext(userContext)
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter((counter)=>counter+1)}>Increment</button>
        <button onClick={()=>{
            if (counter==0) exit
            else{
                setCounter(counter-1)
            }
        }}>Decrement</button>
    </div>
  )
}

export default Count1