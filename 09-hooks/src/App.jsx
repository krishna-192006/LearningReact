import React, { useState } from 'react'

const App = () => {

    const [Num, setNum] = useState(0)
    function increase() {
      console.log("Increase by 1");
      
      setNum(Num+1)
    }

    function decrease() {
      setNum(Num-1)
    }

    function IncreaseBy5() {
      setNum(Num+5)
    }

    function DecreaseBy5() {
      setNum(Num+5)
    }

  

  return (
    <div>
      <div className='container'>
      <h1>{Num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={IncreaseBy5}>Increase by 5</button>
      <button onClick={DecreaseBy5}>Decrease by 5</button>
      </div>
    </div>
  )
}

export default App