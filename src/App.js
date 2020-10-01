import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('');
  const baseUrl = 'https://cors-anywhere.herokuapp.com';

  const getUserIp = () => {
    fetch('https://api.ipify.org/?format=json')
      .then((res) => res.json())
      .then((data) => {
        getCountry(data.ip);
      });
  };

  const getCountry = (ip) => {
    console.log('ip', ip);
    fetch(`${baseUrl}/https://ipvigilante.com/json/${ip}`)
      .then((res) => res.json())
      .then((response) => {
        setCountry(response.data.country_name);
        console.log('data', response.data.country_name);
      });
  };

  useEffect(() => {
    getUserIp();
  });

  return <div>{country !== '' && <h2>You are in: {country} </h2>}</div>;
};

export default App;
