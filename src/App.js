import React, { useState } from 'react';
import CurrencyConverterForm from './components/CurrencyConverterForm';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleConvert = async (event) => {
    event.preventDefault();
    const form = event.target;
    const amount = parseFloat(form.amount.value);
    const currency = form.currency.value;

    if (isNaN(amount) || amount <= 0) {
      alert("Wprowadź kwotę większą niż 0.");
      return;
    }

    try {
      const response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`);
      const data = await response.json();
      const rate = data?.rates?.[0]?.mid;

      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(`To ${convertedAmount} PLN`);
      } else {
        alert("Nie udało się pobrać kursów wymiany.");
      }
    } catch (error) {
      console.error("Błąd podczas pobierania kursów wymiany:", error);
      alert("Nie udało się pobrać kursów wymiany. Spróbuj ponownie później.");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img
          className="logo"
          src="https://ocdn.eu/pulscms-transforms/1/r6lk9kuTURBXy8yZWM0MWEwNC05NDc2LTRiMjQtYjYzYy02ZjkxMWJmMDU0NmQuanBlZ5GVAs0CZwDDw94AAaEwAQ"
          alt="pieniądze"
        />
        <h1 className="title">Przelicznik walut</h1>
      </header>
      <CurrencyConverterForm onConvert={handleConvert} />
      {result && <div className="result-display">{result}</div>}
    </div>
  );
};

export default App;





