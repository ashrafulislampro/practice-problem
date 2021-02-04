import React, { useEffect, useState } from 'react';
import MainComponent from '../Product/MainComponent';

const Home = () => {
          const [countries, setCountries] = useState([]);
          useEffect(() =>{
                    const url = 'https://restcountries.eu/rest/v2/all';
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setCountries(data))
          },[])
          return (
                    <div>
                           <h1>Country Loaded : {countries.length}</h1>
                           {
                                     countries.map(country => <MainComponent country={country} key={country.name}></MainComponent>)
                           }
                    </div>
          );
};

export default Home;