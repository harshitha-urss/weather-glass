import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiCloudy,
  WiDayFog,
  WiThermometer,
} from "react-icons/wi";

export default function CurrentWeather({ data }) {
  if (!data || data.success === false) return null;

  const condition =
    data.current.weather_descriptions[0]?.toLowerCase() || "";

  const getMainIcon = () => {
    if (condition.includes("sun")) return <WiDaySunny size={90} />;
    if (condition.includes("cloud")) return <WiCloud size={90} />;
    if (condition.includes("rain")) return <WiRain size={90} />;
    if (condition.includes("snow")) return <WiSnow size={90} />;
    if (condition.includes("thunder")) return <WiThunderstorm size={90} />;
    if (condition.includes("mist") || condition.includes("fog"))
      return <WiDayFog size={90} />;
    return <WiDaySunny size={90} />;
  };

  return (
    <>
      {/* ===== MAIN CARD ===== */}
      <div className="glass main-card">

        {/* LEFT SECTION */}
        <div className="left">
          <h2>
            {data.location.name}, {data.location.country}
          </h2>

          <div className="temp-row">
            <h1>{data.current.temperature}°C</h1>
            {getMainIcon()}
          </div>

          <p>{data.current.weather_descriptions[0]}</p>
        </div>

        {/* RIGHT WIND BOX */}
        <div className="glass wind-box">
          <WiStrongWind size={40} />
          <h4>Wind</h4>
          <p className="wind-speed">
            {data.current.wind_speed} km/h
          </p>
          <p>{data.current.wind_dir}</p>
        </div>
      </div>

      {/* ===== STATS GRID ===== */}
      <div className="stats-grid">

        {/* Humidity */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiHumidity size={28} />
          </div>
          <h4>Humidity</h4>
          <p>{data.current.humidity}%</p>
        </div>

        {/* Pressure */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiBarometer size={28} />
          </div>
          <h4>Pressure</h4>
          <p>{data.current.pressure} hPa</p>
        </div>

        {/* Visibility */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiCloudy size={28} />
          </div>
          <h4>Visibility</h4>
          <p>{data.current.visibility} km</p>
        </div>

        {/* Cloud Cover */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiCloud size={28} />
          </div>
          <h4>Cloud Cover</h4>
          <p>{data.current.cloudcover}%</p>
        </div>

        {/* Feels Like */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiThermometer size={28} />
          </div>
          <h4>Feels Like</h4>
          <p>{data.current.feelslike}°C</p>
        </div>

        {/* UV Index */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiDaySunny size={28} />
          </div>
          <h4>UV Index</h4>
          <p>{data.current.uv_index}</p>
        </div>

        {/* Precipitation */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiRain size={28} />
          </div>
          <h4>Precipitation</h4>
          <p>{data.current.precip} mm</p>
        </div>

        {/* Wind Speed */}
        <div className="glass small-card">
          <div className="icon-circle">
            <WiStrongWind size={28} />
          </div>
          <h4>Wind Speed</h4>
          <p>{data.current.wind_speed} km/h</p>
        </div>

      </div>
    </>
  );
}
