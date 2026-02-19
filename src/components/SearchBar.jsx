export default function SearchBar({ location, setLocation, onSearch }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
