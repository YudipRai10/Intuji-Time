import React, { useEffect, useState } from "react";
import arrow from "../../assets/icon-left.png";

function Calender(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayNames = ["MO", "TU", "WED", "TH", "FR", "SA", "SU"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    [,];
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const isFutureDate = (date: Date) => {
    return date > new Date();
  };

  const prevMonthLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  return (
    <div className="calender absolute top-40 left-1/2 transform -translate-x-1/2 bg-white flex flex-col gap-2 w-[376px] shadow-lg rounded-lg overflow-hidden p-4 mx-auto">
      {/* Calender Header */}
      <div className="header flex justify-between items-center">
        <button
          className="bg-lightGray rounded-full w-8 h-8 flex justify-center items-center"
          onClick={prevMonth}
        >
          <img src={arrow} alt="left-arrow" />
        </button>
        <span className="font-bold text-sm text-dateBlack">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button
          className="bg-lightGray rounded-full w-8 h-8 flex justify-center items-center"
          onClick={nextMonth}
        >
          <img src={arrow} alt="right-arrow" className="rotate-180" />
        </button>
      </div>
      {/* Day of the Week Section */}
      <div className="day-names w-full flex justify-between">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-sm font-bold text-[#A8A29E] w-12 h-9 flex justify-center items-center"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Day Number of the Month */}
      <div className="days w-full flex justify-start flex-wrap">
        {/* Render previous month's days in empty spaces */}
        {Array.from({ length: startDay }).map((_, index) => {
          const prevMonthDate = new Date(prevMonthLastDay);
          prevMonthDate.setDate(
            prevMonthDate.getDate() - (startDay - index - 1)
          );
          return (
            <div
              key={index}
              className="empty-day w-12 h-9 items flex justify-center items-center box-border text-dateBlack font-semibold text-sm"
            >
              {prevMonthDate.getDate()}
            </div>
          );
        })}
        {/* Render current month's day */}
        {daysInMonth.map((day) => (
          <div
            key={day.getTime()}
            className={`day w-12 h-9 items flex justify-center items-center box-border text-dateBlack font-semibold text-sm rounded-lg  ${
              isSameDay(day, new Date()) ? "bg-[#0C0A09] text-white" : ""
            } ${isFutureDate(day) ? "text-slate-500" : ""}`}
            onClick={() => {
              if (!isFutureDate) {
                handleDateClick(day);
              }
            }}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;

// ${
//               selectedDate && isSameDay(day, selectedDate)
//                 ? "bg-[#0C0A09] text-white"
//                 : ""
//             }
