// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [query, setQuery] = useState("1");
  const [result, setResult] = useState("");
  const [onCurrency, setOnCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [loading, setLoading] = useState(null);

  
  useEffect(
    function () {
      setLoading(true);
      async function fetchCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${query}&from=${onCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setResult(data.rates[toCurrency]);
        setLoading(false);
      }
      if (onCurrency === toCurrency) {
        return (setResult(query))
      }
      fetchCurrency();
    },
    [query, onCurrency, toCurrency, loading]
  );
  
  function tellValue() {
    return <p>{query <= 0 ? setQuery(0.01) : `${result} ${toCurrency}`}</p>;
  }

  console.log(result);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={onCurrency}
        onChange={(e) => setOnCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {loading ? <p>Loading...</p> : tellValue()}
    </div>
  );
}
