import { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  const [text, setText] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!text) return
    const newItem = {text, select, packed: false, id: Date.now()}
    console.log(newItem);

    setSelect(1)
    setText('')

    initialItems.push({id: newItem.id, description: newItem.description, package: newItem.packed})
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={select} onChange={(event) => setSelect(event.target.value)}>

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={text}
        onChange={(event) => setText(event.target.value)
        }
      />

      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const [line, setLine] = useState(item.packed);
  return (
    <li>
      <span style={line ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => setLine(!line)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
