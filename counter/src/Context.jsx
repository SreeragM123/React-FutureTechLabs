import React, { createContext, useState } from 'react'
import Count1 from './Count1';
import Count2 from './Count2';


export const userContext=createContext()
const Context = () => {

    const[counter,setCounter]=useState(0);

  return (
    <div>
        <userContext.Provider   value={{counter,setCounter}}>
            <Count1/>
            <Count2/>
        </userContext.Provider>
    </div>
  )
}

export default Context