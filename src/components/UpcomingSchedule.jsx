import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

function UpcomingSchedule() {
    const schedule = [
        {
            day: "On Thursday",
            appointments: [
                { title: "Health checkup complete", time: "10:00 AM", icon: "❤️"},
                { title: "Neurologist", time: "02:00 PM", icon: "🧠"}
            ],
        },
    ];

    return (
        <div className="upcoming-schedule">
            <h3>The Upcoming Schedule</h3>
            {schedule.map((dayBlock, idx) => {
                <div key={idx} className="day-block">
                    <h4>{dayBlock.day}</h4>
                    {dayBlock.appointments.map((appt, index) => {
                        <SimpleAppointmentCard
                           key={index}
                           title={appt.title}
                           time={appt.time}
                           ion={appt.icon}
                        />
                    })}
                </div>
            })}
        </div>
    );
}

export default UpcomingSchedule;