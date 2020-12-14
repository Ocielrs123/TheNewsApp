import React from 'react'

const Weather = (props) => {
    return (
      <div className="container ">
          <div className="cards pt-4">
        <center>
        <h1>{props.city} - {props.country}</h1>
        <h5 className="py-4">
           <i className={`wi ${props.weathericon} display-1`}></i> 
        </h5>
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            {minmaxTemp(props.temp_min, props.temp_max )}
        <h4 className="py-4">{props.description}</h4> 
        </center>
        </div>
      </div>
    );
  };

  function minmaxTemp(min, max){
      return(
          <h3>
              Min {min}&deg; |
              Max {max}&deg;
          </h3>
      )
  }

  export default Weather;
