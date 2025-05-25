import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Sidebar/>
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App
