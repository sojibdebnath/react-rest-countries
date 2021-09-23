import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // fetch('https://restcountries.eu/rest/v2/all')
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h2>Traveling around the world!!</h2>
      <h4>Countries Available:{photos.length}</h4>
    </div>
  )
}

export default App;
