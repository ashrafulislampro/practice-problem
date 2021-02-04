import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Details/Detail';

const CountryDetail = () => {
          const {name} = useParams();
          const [country, setCountry] = useState([]);
          useEffect(() => {
                    const url = `https://restcountries.eu/rest/v2/name/${name}`;
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setCountry(data))
          },[])
        
         
          return (
                    <div>
                              <h1>This is country details-{name}</h1>
                              {
                                        country.map(cty => <Detail country={cty} key={cty.name}></Detail>)
                              }

                    </div>
          );
};

export default CountryDetail;