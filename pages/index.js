
import { useState } from 'react';
import { format } from 'date-fns';

export default function Home() {
  const [homeAirport, setHomeAirport] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const mockResults = [
      {
        summary: `${homeAirport} → FCO → ${destination}`,
        legs: [`${homeAirport} → FCO`, `FCO → ${destination}`],
        wait_time: '3h 20m',
        total_price: '220 GBP'
      },
      {
        summary: `${homeAirport} → IST → ${destination}`,
        legs: [`${homeAirport} → IST`, `IST → ${destination}`],
        wait_time: '2h 45m',
        total_price: '198 GBP'
      }
    ];
    setResults(mockResults);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <img src="/logo.png" alt="CheapLeaps Logo" style={{ width: 120, marginBottom: 20, cursor: 'pointer' }} onClick={() => window.location.href = '/'} />
      <h1>CheapLeaps</h1>
      <input placeholder="From (e.g. LON)" value={homeAirport} onChange={e => setHomeAirport(e.target.value)} />
      <input placeholder="To (e.g. JED)" value={destination} onChange={e => setDestination(e.target.value)} />
      <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
      <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
      <button onClick={handleSearch}>Find Flights</button>
      {results.map((r, i) => (
        <div key={i} style={{ marginTop: 10, background: '#eef', padding: 10 }}>
          <b>{r.summary}</b>
          <div>Legs: {r.legs.join(', ')}</div>
          <div>Wait Time: {r.wait_time}</div>
          <div>Total Price: {r.total_price}</div>
          <button style={{ marginTop: 5 }}>Book Now</button>
        </div>
      ))}
    </div>
  );
}
