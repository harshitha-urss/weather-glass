export default function StatsGrid({ data }) {
  return (
    <div className="stats-grid">
      <div className="glass small-card">
        Humidity
        <h3>{data.current.humidity}%</h3>
      </div>

      <div className="glass small-card">
        Pressure
        <h3>{data.current.pressure} hPa</h3>
      </div>

      <div className="glass small-card">
        Visibility
        <h3>{data.current.visibility} km</h3>
      </div>

      <div className="glass small-card">
        Cloud Cover
        <h3>{data.current.cloudcover}%</h3>
      </div>
    </div>
  );
}
