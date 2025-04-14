import { useState } from "react";

const messages = [
  "Learn React 👨🏼‍💻",
  "Apply for jobs 💼",
  "Invest your new income 💶"
]

function App() {
  const [count, setCount] = useState(1)

  function previous() {
    setCount(count == 1 ? count : count-1)
  }

  function next() {
    setCount(count == 3 ? count : count+1)
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={count >= 1 ? 'active' : 'not-active'}>1</div>
        <div className={count >= 2 ? 'active' : 'not-active'}>2</div>
        <div className={count >= 3 ? 'active' : 'not-active'}>3</div>
      </div>

      <p>Step {count}: {messages[count-1]}</p>

      <div className="buttons">
        <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={previous}>Previous</button>
        <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default App
