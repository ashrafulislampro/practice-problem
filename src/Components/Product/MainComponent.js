import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './MainComponent.css';
const MainComponent = (props) => {
          const {name,flag,population,region,capital} = props.country;
          const history = useHistory();
          const handleClick = (name) => {
                    history.push(`/country/${name}`);
          }
          return (
                    <div className="main-container">
                              <h1>Name : {name}</h1>
                              <img className="imgStyle" src={flag} alt=""/>
                              <p>Capital : {capital}</p>
                              <p>Region : {region}</p>
                              <p>Population : {population}</p>
                              <Link to={`/country/${name}`}>Show details</Link>

                              <br/>

                              <button onClick={() => handleClick(name)}>Click me</button> 
                    </div>
          );
};

export default MainComponent;