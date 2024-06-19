
import './App.css';
import {useState} from "react";

const api = {
    key: '3c6562b8d3ba7f6020493029f9228eaf',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
    const [search,setSearch] = useState('')
    const [weather,setWeather] = useState('')

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {

                // setWeather(result)
                console.log(result)
                setWeather(result);
            })
    }
  return (
    <div className="App">
      <header className="App-header">
          {/*{Weather}*/}
          <h1>Weather App</h1>
          {/*Search Box*/}
          <div>
          <input type="text" placeholder="Enter City/Town" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchPressed}>Search</button>
          </div>
          {typeof weather.main != "undefined" ? (
                  <div>
                      <p>{weather.name}</p>
                      <p>{weather.main.temp}</p>
                      <p>{weather.weather[0].main}</p>
                      <p>{weather.weather[0].description}</p>
                  </div>
              ) : (
                  ''
          )}
      </header>
    </div>
  );
}

export default App;
