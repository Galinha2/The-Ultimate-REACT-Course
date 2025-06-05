import "../src/index.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 p-10 m-4 bg-red-500 max-w-300">
      <h1 className="text-4xl bg-yellow-500">The Wild Oasis</h1>
      <span>
        <button className="btn">Check in</button>
        <button className="btn">Check Out</button>
      </span>
      <span>
        <input className="inp" type="text" placeholder="Number of Guests" />
        <input className="inp" type="text" placeholder="Number of Guests" />
      </span>
    </div>
  )
}

export default App
