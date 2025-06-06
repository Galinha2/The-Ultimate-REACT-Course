import "../src/index.css";

function App() {
  return (
    <div className="flex flex-col items-center gap-5 p-10 m-4 justify-left max-w-300">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="h-full text-4xl">The Wild Oasis</h1>
        <span>
          <h3 className="text-center">Check in and out</h3>
          <button className="btn-blue">Check in</button>
          <button className="btn-white">Check Out</button>
        </span>
      </div>
     <form className="self-start text-left">
        <h3>Form</h3>
        <input className="inp" type="text" placeholder="Number of Guests" />
        <input className="inp" type="text" placeholder="Number of Guests" />
      </form>
    </div>
  );
}

export default App;
