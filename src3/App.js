import { useState } from 'react'

const App = () => {

  const [countState, setCountState] = useState({
  name: 'john Doe',
  count: 0,
  sum: 1,
  minus: 1,
  multi: 2,
  divide: 2

  })

  const handleIncrement = () =>{
  // console.log('hi')

    setCountState({ ...countState, count: countState.count + 1 })   //...countState meaning keep the old value and next line is change the value

  }

  const handleDecrement = () =>{
   setCountState({ ...countState, count: countState.count - 1 })

  }

  const handleAdd = () => {
    setCountState({ ...countState, sum: countState.sum + 2 })

  }
  const handleMinus = () => {
    setCountState({ ...countState, minus: countState.minus - 1 })

  }

  const handleMultiply = () => {
    setCountState({ ...countState, multi: countState.multi * 2 })

  }
  const handleDivide = () => {
    setCountState({ ...countState, divide: countState.divide / 2 })

  }


  const handleBtnClick = () =>{

  console.log('click button')
  }


  return (
    <>
      <h1>Name : {countState.name}</h1>
      <h1>Count: {countState.count}</h1>
      <h1>Sum: {countState.sum}</h1>
      <h1>Minus: {countState.minus}</h1>
      <h1>Multi: {countState.multi}</h1>
      <h1>Divide: {countState.divide}</h1>
      
      <button onClick={handleIncrement}>+</button> 
      <button onClick={handleDecrement}>-</button>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>

      <button onClick={handleMultiply}>Multi</button>

      <button onClick={handleDivide}>Divide</button>

      
    </>
  )
}

export default App
