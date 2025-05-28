import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app-root">
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="main-content">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
