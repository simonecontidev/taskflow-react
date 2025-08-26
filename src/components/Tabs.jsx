export function Tabs() {
    const tabs = ["All", "Active", "Completed"];
  return (
    <nav className="tab-container">
        {tabs.map((tab) => (
            <button key={tab} className="tab-button">
                <h4>{tab} <span>(0)</span></h4>
            </button>
        ))} 
    </nav>
  );
}