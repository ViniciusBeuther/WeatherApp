import rainfallIcon from './assets/Weather_Icons/rainfallIcon.svg'
import windIcon from './assets/Weather_Icons/windIcon.svg'
import humidityIcon from './assets/Weather_Icons/humidityIcon.svg'
import { useState, useEffect } from "react";
import CityNameComponent from "./components/CityName";
import HeaderComponent from "./components/Header";
import WeatherComponent from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";
import PreviewNextDays from './components/PreviewNextDays';
import Footer from './components/Footer';

const ApiKey = "719da22d1665c7a4897ef620327ff35e";

export default function App() {
  const [result, setResult] = useState('');

  const ApiResponse = async (searchTerm, setPlaceHolder) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${searchTerm}&appid=${ApiKey}&units=metric`);
      const data = await response.json();
      setResult(data);
      clearInput()

    } catch (error) {
      console.error('Error getting the API response:', error);
    }
  };

  useEffect(() => {
    // Chama a API quando o componente for montado pela primeira vez
    ApiResponse('London');
  }, []); // O array vazio como segundo argumento significa que o useEffect será executado apenas uma vez no montante inicial

  return (
    <>
      <HeaderComponent apiMethod={ApiResponse} />
      <CityNameComponent data={result} />
      <WeatherComponent data={result} />
      {/* weather information long cards */}
      <>
        {console.log(result)}
        
        {result.list && result.list[0] && result.list[0].weather ? (
          <>
          <WeatherDetails icon={rainfallIcon} description="Rainfall" infoToShow={result.list[0].weather.rain + ' mm'} />

          <WeatherDetails icon={windIcon} description="Wind Speed" infoToShow={Math.floor(result.list[0].wind.speed) + ' km/h'} />

          <WeatherDetails icon={humidityIcon} description="Humidity" infoToShow={result.list[0].main.humidity + ' %'} />
          </>
        ) : ('Loading')}
      </>
      <PreviewNextDays data={result} />
      <Footer />
    </>
  );
}
