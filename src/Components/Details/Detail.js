import React from 'react';
import './Detail.css';
const Detail = (props) => {
          const country = props.country;
          const {name,population,region,capital,flag} = country;
          return (
                    <div className="text-content">
                           <p>Name : {name}</p>
                           <img className="imgStyles" src={flag} alt=""/>
                           <p>Region : {region}</p>  
                           <p>Capital : {capital}</p>   
                           <p>Population : {population}</p>       
                    </div>
          );
};

export default Detail;