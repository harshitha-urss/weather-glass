import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import MainCard from "./components/MainCard";
import StatsGrid from "./components/StatsGrid";
import { getCurrentWeather } from "./api";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState("current");

  const handleSearch = async () => {
    try {
      const response = await getCurrentWeather(location);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤 WeatherGlass</h1>

      <SearchBar
        location={location}
        setLocation={setLocation}
        onSearch={handleSearch}
      />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {weatherData && (
        <>
          <MainCard data={weatherData} />
          <StatsGrid data={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
