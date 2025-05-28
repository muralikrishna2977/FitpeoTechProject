import "./Calendar.css";

const days = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"], selected: true, highlight: "09:00" },
  { day: "Wed", date: 27, slots: ["12:00", "", "13:00"] },
  { day: "Thurs", date: 28, slots: ["10:00", "11:00", ""], highlight: "11:00" },
  { day: "Fri", date: 29, slots: ["", "14:00", "16:00"] },
  { day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"], highlight: "12:00" },
  { day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"], highlight: "09:00", disabled: true }
];

function Calendar() {
  return (
    <div className="calendar">
      {days.map((d, i) => (
        <div
          className={`calendar-day ${d.selected ? "selected-day" : ""} ${d.disabled ? "disabled-day" : ""}`}
          key={i}
        >
          <div className="day-name">{d.day}</div>
          <div className="day-date">{d.date}</div>

          <div className="time-slots">
            {
              d.slots.map((slot, index) => (
                <div
                  key={index}
                  className={`time-slot ${(d.highlight === slot && d.selected) ? "highlightedSelected" : d.highlight === slot ? "highlight-slot" : ""} ${d.disabled ? "disabled-day" : ""}`}
                >
                  {slot===""?("___"):slot}
                </div>
              ))
            }
          </div>

        </div>
      ))}
    </div>
  );
}

export default Calendar;


