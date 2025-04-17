import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function sendItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleOnToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={sendItems} />
      <PackingList
        itemsSend={items}
        onDelete={handleDelete}
        onToggle={handleOnToggle}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [text, setText] = useState("");
  const [select, setSelect] = useState(1);
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!text) return;
    const newItem = { text, select, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setSelect(1);
    setText("");
  }
  
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={select}
        onChange={(event) => setSelect(event.target.value)}
      >
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
        onChange={(event) => setText(event.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList({ itemsSend, onDelete, onToggle }) {
  console.log(itemsSend.packed)
  return (
    <div className="list">
      <ul>
        {itemsSend.map((item) => (
          <Item
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelete, onToggle }) {

  return (  
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.select} {item.text}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>🧳 You have {numItems} items on your list, and you already packed {numPacked})</em>
    </footer>
  );
}

export default App;
