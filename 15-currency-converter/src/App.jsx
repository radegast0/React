// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from 'react';
import './index.css';

export default function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [toConvert, setToConvert] = useState('EUR');
  const [conversion, setConversion] = useState(1);

  useEffect(() => {
    async function converter() {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${toConvert}`);
        const data = await res.json();
        setConversion(data.rates[toConvert]);
      } catch (error) {
        console.error('Error fetching conversion rates:', error);
      }
    }
  
    converter();
  }, [amount, currency, toConvert]);
  



  return (
    <div>
      <input type='text' onChange={(e) => setAmount(e.target.value)} />
      <select onChange={(e) => setCurrency(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='TRY'>TRY</option>
      </select>
      <select onChange={(e) => setToConvert(e.target.value)}>
        <option value='EUR'>EUR</option>
        <option value='USD'>USD</option>
        <option value='CAD'>CAD</option>
        <option value='TRY'>TRY</option>
      </select>
      <p>{conversion}</p>
    </div>
  );
}
