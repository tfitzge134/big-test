import React, { useEffect, useState } from 'react';
import bigMac from './data/big-mac-index.json';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [input, setInput] = useState('');
  const [ppp, setPPP] = useState('');
  const [data, setData] = useState([]);
  const [bigMacVolume, setBigMacVolume] = useState('');
  const baseUrl = 'https://thingproxy.freeboard.io/fetch/';

  const getUserIp = () => {
    fetch('https://api.ipify.org/?format=json')
      .then((res) => res.json())
      .then((data) => {
        getCountry(data.ip);
      });
  };
  // https://javascript.info/fetch-crossorigin
  const getCountry = (ip) => {
    console.log('ip', ip);
    fetch(`${baseUrl}https://ipvigilante.com/json/${ip}`, {
      'Content-Type': 'application/json',
      Accept: '*/*',
      // mode: 'cors',
    })
      .then((res) => res.json())
      .then((response) => {
        setCountry(response.data.country_name);
      });
  };

  useEffect(() => {
    getUserIp();
    setData(bigMac);
  }, []);

  const getBigMacNumber = (e) => {
    e.preventDefault();
    const getFiltered = data.filter((d) => d.Country == country);
    const randCountry =
      getFiltered[Math.floor(Math.random() * getFiltered.length)];
    const result =
      (input / randCountry['Local price']) *
      (randCountry['Local price'] / randCountry['Dollar price']);
    console.log('input', input);
    console.log('local', randCountry['Local price']);
    console.log('dollar', randCountry['Dollar price']);
    console.log('random country', randCountry);
    console.log('countries matched', result);
    setBigMacVolume(result);
    setPPP(randCountry['Dollar PPP']);
  };

  return (
    <div>
      <div>{country !== '' && <h2>You are in: {country} </h2>}</div>
      <form className="input-form" onSubmit={getBigMacNumber}>
        <div className="input-wrap">
          <h4>Please enter an amount of money in your local currency -</h4>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      {ppp !== '' && (
        <div>
          <p className="result">
            You could buy {ppp} of Big Macs in your country
          </p>
          <p className="result">
            You could buy {bigMacVolume} of Big Macs in {country} with ${input}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
