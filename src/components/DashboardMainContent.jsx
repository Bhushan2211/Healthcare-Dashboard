import "../styles/DashboardMainContent.css";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalenderView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import AnatomySection from "./AnatomySection";

function DashboardMainContent() {
    return (
        <main className="dashboard-main">
            <section className="dashboard-left">
                <h2>Dashboard</h2>

                <div className="dashboard-overview">
                    <AnatomySection />
                    <HealthStatusCards />
                </div>

                <ActivityFeed />
            </section>

            <section className="dashboard-right">
                <CalenderView />
            </section>
        </main>
    );
}

export default DashboardMainContent;
