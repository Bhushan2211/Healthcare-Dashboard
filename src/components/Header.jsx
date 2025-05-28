import "./../styles/Header.css";
import avatar from "../assets/avatar.jpg";
import { FiBell, FiMenu } from "react-icons/fi";

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <FiMenu className="menu-icon" onClick={onToggleSidebar} />
        <div className="logo">
          <span className="blue">Health</span>care.
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <FiBell className="icon" />
      </div>

      <div className="header-right">
        <img src={avatar} alt="avatar" className="avatar" />
        <button className="add-btn">+</button>
      </div>
    </header>
  );
}

export default Header;
