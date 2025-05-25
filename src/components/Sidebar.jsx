import "../styles/Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">Healthcare.</div>

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
                    <li className="sidebar-item">🛠️ Suppor</li>
                </ul>
            </div>

            <div className="sidebar-section">
                <p className="sidebar-item">⚙️ Setting</p>
            </div>
        </aside>
    );
}

export default Sidebar;