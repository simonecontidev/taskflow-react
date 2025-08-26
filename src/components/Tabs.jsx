export function Tabs() {
    const tabs = ["All", "Active", "Completed"];
  return (
    <nav className="tabs">
        {tabs.map((tab) => (
            <button key={tab} className="tab">
                <h4>{tab}</h4>
            </button>
        ))} 
    </nav>
  );
}