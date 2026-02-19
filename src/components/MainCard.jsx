export default function MainCard({ data }) {
  return (
    <div className="main-card glass">
      <div className="left">
        <h3>{data.location.name}, {data.location.country}</h3>
        <h1>{data.current.temperature}°C</h1>
        <p>{data.current.weather_descriptions[0]}</p>
      </div>

      <div className="right">
        <p>Wind</p>
        <h2>{data.current.wind_speed} km/h</h2>
        <p>{data.current.wind_dir}</p>
      </div>
    </div>
  );
}
