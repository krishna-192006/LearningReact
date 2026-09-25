// import React from 'react'

// const App = () => {
//   function btn_clicked() {
//     console.log("Button is clicked");
//   }
//   return (
//     <div>
//       <button onClick={btn_clicked}>Click me</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const ans = function btnCLicked() {
//       console.log("Button clicked");
//     }
//   return (
//     <div>
//       <button onClick={ans}>Click me</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button onClick={
//         ()=>{
//           console.log("Button clicked");
//         }
//         }>

//         </button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
 
//   return (
//     <div>
//       <input type="text" 
//       onChange={function (elem)  {
//     console.log(elem.target.value);
//     }} 
//    placeholder='Enter your name' />
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

  const handleWheel = function (elem) {
    console.log(elem.pageY);
  }
  return (
    <div 
    style={{
      height:"400px",
      width:"400px",
      backgroundColor:"red"
    }}
    onWheel={handleWheel}>
      Scroll over this
    </div>
  );
};

export default App