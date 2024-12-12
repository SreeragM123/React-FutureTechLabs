import React, { useState } from 'react'
import './index.css'
const Counter = () => {
    const[count,setCount]=useState(0);

    const incBtn=()=>{
        setCount(count+1);
    }

    const decBtn=()=>{
        if (count==0) exit
        else{
          setCount(count-1);
        }
    }

    const resBtn=()=>{
        setCount(0);
    }

  return (
    <div className='main'>
        <h2>Counter {count}</h2>
        <button onClick={incBtn}>Increment</button>
        <button onClick={decBtn}>Decrement</button>
        <button onClick={resBtn}>Reset</button>       
    </div>
  )
}

export default Counter