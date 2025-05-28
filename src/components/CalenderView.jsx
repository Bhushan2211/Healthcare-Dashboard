import "../styles/calendarView.css";
import { calendarData, selectedTimes } from "../data/calender";

function CalendarView() {
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h3 className="calendar-title">October 2021</h3>
                <div className="calendar-arrows">
                    <button className="arrow-btn">←</button>
                    <button className="arrow-btn">→</button>
                </div>
            </div>

            <div className="week-grid">
                {calendarData.map(({ day, date, slots }) => (
                    <div key={date} className="week-day">
                        <div className="day-label">
                            <span className="day-name">{day}</span>
                            <span className="day-number">{date}</span>
                        </div>
                        <div className="time-slots">
                            {slots.map((slot, idx) => (
                                <div
                                    key={idx}
                                    className={`time-pill
                                        ${slot === "–" ? "blocked" : ""}
                                        ${selectedTimes[date]?.includes(slot) ? "selected" : ""}
                                    `}
                                >
                                    {slot}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="inline-appointments">
                <div className="inline-card dentist">
                    <h5>Dentist 🦷</h5>
                    <p>09:00–11:00 <br /> Dr. Cameron Williamson</p>
                </div>
                <div className="inline-card physiotherapy">
                    <h5>Physiotherapy Appointment 🏃‍♂️</h5>
                    <p>11:00–12:00 <br /> Dr. Kevin Djones</p>
                </div>
            </div>

            <h4 className="section-title">The Upcoming Schedule</h4>
            <div className="schedule-grid">
                <p className="label-schedule">On Thursday</p>
                <div className="event-pair">
                    <div className="event-card-schedule-health">
                        <p>Health checkup complete <span>🩺</span></p>
                        <p className="event-time">11:00 AM</p>
                    </div>
                    <div className="event-card-schedule-eye">
                        <p>Ophthalmologist <span>👁️</span></p>
                        <p className="event-time">14:00 PM</p>
                    </div>
                </div>

                <p className="label-schedule">On Saturday</p>
                <div className="event-pair">
                    <div className="event-card-schedule-cardio">
                        <p>Cardiologist <span style={{ color: "red" }}>❤️</span></p>
                        <p className="event-time">12:00 AM</p>
                    </div>
                    <div className="event-card-schedule-neuro">
                        <p>Neurologist <span>🧠</span></p>
                        <p className="event-time">16:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarView;
