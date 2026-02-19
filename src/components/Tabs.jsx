export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "current" ? "active" : ""}
        onClick={() => setActiveTab("current")}
      >
        Current
      </button>
      <button
        className={activeTab === "historical" ? "active" : ""}
        onClick={() => setActiveTab("historical")}
      >
        Historical
      </button>
      <button
        className={activeTab === "marine" ? "active" : ""}
        onClick={() => setActiveTab("marine")}
      >
        Marine
      </button>
    </div>
  );
}
