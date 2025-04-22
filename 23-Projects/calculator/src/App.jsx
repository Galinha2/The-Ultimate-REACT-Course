import { useState } from 'react'
import './App.css'
import Bill from './Bill'
import Service from './Service'

function App() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  function handleReset() {
    setPercentage1(0)
    setPercentage2(0)
    setBill(0)
  }

  function calculation() {
    const tip = percentage1 + percentage2;
    const value = tip + bill;

    return(
      <h1>You pay {value}€ ({bill}€ + {tip}€)</h1>
    )
  }
  return (
    <>
      <Bill sendBill={bill} onSetBill={setBill}/>
      <Service percentage={percentage1} onSetPercentage={setPercentage1} text={"How did you like the service?"}/>
      <Service percentage={percentage2} onSetPercentage={setPercentage2} text={"How did your friend like the service?"}/>

      {calculation()}

      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
