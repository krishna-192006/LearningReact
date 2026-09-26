// import React, { useState } from 'react'

// const App = () => {
//   const [Num, setNum] = useState( {user:"Krishna",age:10})

//   const changeName = () => {
//     setNum({
//       ...Num,
//       user:"Aakash",
//       age:20});
//   };

  
//   return (
//     <div>
//       <h1>{Num.user}, {Num.age}</h1>
//       <button onClick={changeName}>Click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)
  const changeEle = () => {
    // setArr(
    //   Arr.filter(item => item != 20) // remove
    // )

    // setArr(
    //   [...Arr,50] // to add
    // )
    
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)    

    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeEle}>Click me</button>
    </div>
  )
}

export default App