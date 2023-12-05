import { useState, useEffect } from "react";
import CityNameComponent from "./components/CityName";
import HeaderComponent from "./components/Header";
import WeatherComponent from "./components/Weather";

const ApiKey = "719da22d1665c7a4897ef620327ff35e";

export default function App() {
  const [result, setResult] = useState('');

  const ApiResponse = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${searchTerm}&appid=${ApiKey}&units=metric`);
      const data = await response.json();
      setResult(data);
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
    </>
  );
}
