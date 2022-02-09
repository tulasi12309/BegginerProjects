import React, { useState } from "react";
import "./WeatherApp.css";
function WeatherApp() {
  const [city, setCity] = useState("");
  const [result,setResult] = useState("");
  const cityHandler = (e) =>{
    setCity(e.target.value);
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response=> response.json())
    .then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
    setCity('');
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <form className="form" onSubmit={submitHandler}>
              <input type="text" className="search" value={city} onChange={cityHandler}/>
              <input
                type="submit"
                className="temperature"
                value="Get Temperature"
              />
            </form><br /> <br />
            <div>
               <h2>{result}</h2> 
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
export default WeatherApp;