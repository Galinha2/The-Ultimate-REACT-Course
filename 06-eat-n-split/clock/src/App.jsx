import { useState } from 'react'
import './App.css'

function App() {

  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function dateHandler() {
    const date = new Date()
    console.log(date)
    return(
      <div>
        {count >= 0 ?
        <h1>hi</h1> :
        <h1>bYE</h1>
      }
      </div>
    )
  }

  return (
    <>
      <div className='buttonsFrame'>
        <button onClick={() => setStep(step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(step +1)}>+</button>
      </div>
      <div className='buttonsFrame'>
        <button onClick={() => setCount(count-step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+step)}>+</button>
      </div>
      <p>{dateHandler()}</p>
    </>
  )
}

export default App
