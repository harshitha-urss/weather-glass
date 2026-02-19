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
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const cleanedCity = location.trim();

    // ✅ Validate city name (letters + spaces only)
    if (!/^[a-zA-Z\s]+$/.test(cleanedCity)) {
      setError("Please enter only city name (no numbers or country).");
      setWeatherData(null);
      return;
    }

    try {
      setError("");
      const response = await getCurrentWeather(cleanedCity);

      // Weatherstack error handling
      if (response.data.error) {
        setError("City not found. Please enter a valid city name.");
        setWeatherData(null);
      } else {
        setWeatherData(response.data);
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤 WeatherGlass</h1>

      <p className="city-note">
      Enter city name only (Example: Bangalore)
      </p>

      <SearchBar
        location={location}
        setLocation={setLocation}
        onSearch={handleSearch}
      />

      {/* 🔴 Error message */}
      {error && <p style={{ color: "#ff6b6b", marginTop: "10px" }}>{error}</p>}

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
