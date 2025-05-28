import "../styles/ActivityFeed.css";

function ActivityFeed() {
    const activity = [
        { day: "Mon", bars: [30, 50, 70] },
        { day: "Tue", bars: [80, 40, 60] },
        { day: "Wed", bars: [50, 60, 70] },
        { day: "Thu", bars: [60, 40, 50] },
        { day: "Fri", bars: [90, 70, 60] },
        { day: "Sat", bars: [50, 40, 60] },
        { day: "Sun", bars: [40, 30, 20] },
    ];

    const colors = ["#3c50e0", "#2ed8b6", "#a2a7f0"]; 

    return (
        <div className="activity-feed">
            <div className="activity-header">
                <h3>Activity</h3>
                <p className="summary">3 appointments this week</p>
            </div>
            <div className="bar-chart">
                {activity.map((item, index) => (
                    <div key={index} className="bar-wrapper">
                        <div className="multi-bar">
                            {item.bars.map((height, idx) => (
                                <div
                                    key={idx}
                                    className="bar"
                                    style={{
                                        height: `${height}%`,
                                        backgroundColor: colors[idx % colors.length],
                                    }}
                                ></div>
                            ))}
                        </div>
                        <span className="label-day">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityFeed;
