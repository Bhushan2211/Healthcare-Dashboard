import "../styles/HealthStatusCards.css";
import { GiLungs } from "react-icons/gi";
import { GiTooth, GiBoneKnife } from "react-icons/gi";


function HealthStatusCards() {
    const cards = [
        {
            label: "Lungs",
            status: "Needs Attention",
            date: "Oct 10, 2021",
            icon: <GiLungs size={34} color="#d32f2f" />,
            color: "#ff6b6b", 
            bg: "#ffe5e5",
            percentage: 30
        },
        {
            label: "Teeth",
            status: "Healthy",
            date: "Oct 9, 2021",
            icon: <GiTooth size={34} color="#ffffff" />,
            color: "#a3d9a5", 
            bg: "#e5fbe5",
            percentage: 90
        },
        {
            label: "Bone",
            status: "Check Required",
            date: "Oct 8, 2021",
            icon: <GiBoneKnife size={34}  color="#f57c00" />,
            color: "#ffc107", 
            bg: "#fff9e5",
            percentage: 60
        },
    ];

    return (
        <div className="health-status-cards">
            {cards.map((card, index) => (
                <div
                    className="health-card"
                    style={{ backgroundColor: card.bg }}
                    key={index}
                >
                    <div className="card-top">
                        <div className="card-icon">{card.icon}</div>
                        <div className="card-info">
                            <h4>{card.label}</h4>
                            <span className="card-date">Date: {card.date}</span>
                        </div>
                    </div>
                    <div className="card-bar">
                        <div
                            className="card-bar-fill"
                            style={{
                                backgroundColor: card.color,
                                width: `${card.percentage}%`
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HealthStatusCards;
