// import React from 'react'

// export const App = () => {

//   const stud=[
//     {id:1,name:"A",subject:"MERN"},
//     {id:2,name:"B",subject:"JavaScript"},
//     {id:3,name:"C",subject:"Python"},
//     {id:4,name:"D",subject:"PHP"},
//     {id:5,name:"E",subject:"Laravel"},
//   ]
//   return (
//     <div>
//       <h2>Student Details</h2>
//       <ul>
//         <li>{stud[0].name}</li>
//         <li>{stud[0].subject}</li>
//       </ul>

//       <ul>
//         <li>{stud[1].name}</li>
//         <li>{stud[1].subject}</li>
//       </ul>

//       <ul>
//         <li>{stud[2].name}</li>
//         <li>{stud[2].subject}</li>
//       </ul>

//       <ul>
//         <li>{stud[3].name}</li>
//         <li>{stud[3].subject}</li>
//       </ul>

//       <ul>
//         <li>{stud[4].name}</li>
//         <li>{stud[4].subject}</li>
//       </ul>

//       <ul>
//         <li>{stud[5].name}</li>
//         <li>{stud[5].subject}</li>
//       </ul>
//     </div>
//   )
// }

import React from 'react'

const App = () => {

  const stud=[
        {id:1,name:"A",subject:"MERN"},
        {id:2,name:"B",subject:"JavaScript"},
        {id:3,name:"C",subject:"Python"},
        {id:4,name:"D",subject:"PHP"},
        {id:5,name:"E",subject:"Laravel"},
      ]

  
  return (
    <div>
     <h2>Student Details</h2>
         <ul>
           <li>{stud[0].name}</li>
             <li>{stud[0].subject}</li>
           </ul>
    
           <ul>
             <li>{stud[1].name}</li>
             <li>{stud[1].subject}</li>
           </ul>
    
           <ul>
             <li>{stud[2].name}</li>
             <li>{stud[2].subject}</li>
           </ul>
    
           <ul>
             <li>{stud[3].name}</li>
             <li>{stud[3].subject}</li>
           </ul>
    
           <ul>
             <li>{stud[4].name}</li>
             <li>{stud[4].subject}</li>
           </ul>
      </div>
  )
}

export default App