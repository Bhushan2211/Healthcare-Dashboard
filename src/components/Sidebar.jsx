import "../styles/Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <p className="sidebar-heading">General</p>
          <ul className="sidebar-list">
            <li className="sidebar-item active">🏠 Dashboard</li>
            <li className="sidebar-item">📜 History</li>
            <li className="sidebar-item">📅 Calendar</li>
            <li className="sidebar-item">📋 Appointments</li>
            <li className="sidebar-item">📊 Statistics</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-heading">Tools</p>
          <ul className="sidebar-list">
            <li className="sidebar-item">💬 Chat</li>
            <li className="sidebar-item">🛠️ Support</li>
          </ul>
        </div>
      </div>

      <div className="sidebar-section sidebar-setting">
        <p className="sidebar-item-setting">⚙️ Settings</p>
      </div>
    </aside>
  );
}

export default Sidebar;
