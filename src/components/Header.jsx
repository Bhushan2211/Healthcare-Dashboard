import "./../styles/Header.css";
import avatar from "../assets/avatar.png";

function Header() {
    return (
      <header className="header">
        <div className="logo">
            <span className="blue">Health</span>care.
        </div>
        <div className="header-right">
            <input type="text" placeholder="Search..." className="search" />
            <span className="icon">🔔</span>
            <img src="{avatar}" alt="avatar" />
            <button className="add-btn">+</button>
        </div>
      </header>

    );
}

export default Header;