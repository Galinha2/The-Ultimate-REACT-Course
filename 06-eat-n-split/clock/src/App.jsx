import { useState } from 'react'
import './App.css'

function App() {

  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function dateHandler() {
    const date = new Date()
    date.setDate(date.getDate() + count)
    console.log(date)
    return(
      <div>
        {count >= 0 ?
        <h1>{count} days from now is {date.toDateString()}</h1> :
        <h1>{Math.abs(count)} days ago was {date.toDateString()}</h1>
      }
      </div>
    )
  }

  return (
    <>
      <div className='buttonsFrame'>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className='buttonsFrame'>
        <button onClick={() => setCount((c) => c -step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c +step)}>+</button>
      </div>
      <p>{dateHandler()}</p>
    </>
  )
}

export default App
