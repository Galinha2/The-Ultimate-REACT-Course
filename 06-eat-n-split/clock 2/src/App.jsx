import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  function dateHandler() {
    const date = new Date();
    date.setDate(date.getDate() + step);
    console.log(date);
    return (
      <div>
        {step >= 0 ? (
          <h1>
            {step} days from now is {date.toDateString()}
          </h1>
        ) : (
          <h1>
            {Math.abs(step)} days ago was {date.toDateString()}
          </h1>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="buttonsFrame">
        <input
          type="range"
          value={count}
          min={0}
          max={10}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <p>{count}</p>
      </div>

      <div className="buttonsFrame">
        <button onClick={() => setStep((s) => s - count)}>-</button>
        <input
          type="text"
          value={step}
          placeholder="Num..."
          onChange={(event) => setStep(event.target.value)}
        />
        <button onClick={() => setStep((s) => s + count)}>+</button>
      </div>

      {dateHandler()}
    </>
  );
}

export default App;
