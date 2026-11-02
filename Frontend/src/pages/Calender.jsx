
import { useState } from "react";
import "../../public/calender.css";

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Month name
    const monthName = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    // Previous month
    function previousMonth() {
        setCurrentDate(new Date(year, month - 1, 1));
    }

    // Next month
    function nextMonth() {
        setCurrentDate(new Date(year, month + 1, 1));
    }

    // Click on date
    function handleDateClick(day) {
        alert(`Selected date: ${day} ${monthName}`);
    }

    // Generate dates
    const calendarDates = [];

    // Empty spaces before first date
    for (let i = 0; i < firstDay; i++) {
        calendarDates.push(null);
    }

    // Add actual dates
    for (let day = 1; day <= totalDays; day++) {
        calendarDates.push(day);
    }

    return (
        <div className="calendar">

            {/* Calendar Header */}
            <div className="calendar-header">

                <button onClick={previousMonth}>
                    &#10094;
                </button>

                <h2>{monthName}</h2>

                <button onClick={nextMonth}>
                    &#10095;
                </button>

            </div>

            {/* Weekdays */}
            <div className="calendar-weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                        <div key={day}>{day}</div>
                    )
                )}
            </div>

            {/* Dates */}
            <div className="calendar-dates">

                {calendarDates.map((day, index) => {

                    const today = new Date();

                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                    return (
                        <div
                            key={index}
                            className={`calendar-date ${
                                isToday ? "today" : ""
                            } ${day ? "" : "empty"}`}
                            onClick={() => day && handleDateClick(day)}
                        >
                            {day}
                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default Calendar;
