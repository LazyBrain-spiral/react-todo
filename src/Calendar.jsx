import React, { useState } from 'react';
import useStore from './Store';
import './Calendar.css';

function Calendar() {
  const streakData = useStore((state) => state.streakData);

  // Get current month and year
  const today = new Date();
  
  // State for navigating between months
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Navigate to previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Go back to current month
  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  
  const getColorIntensity = (count) => {
    if (count === 0) return '#f0f0f0';
    if (count <= 2) return '#ffd4c4';
    if (count <= 4) return '#ffb09a';
    if (count <= 6) return '#ff8c70';
    if (count <= 8) return '#ff7a5c';
    return '#ff5f3c';
  };

  
  const generateCalendarDays = () => {
    const days = [];
    
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateString = date.toDateString();
      const streakCount = streakData[dateString] || 0;
      const backgroundColor = getColorIntensity(streakCount);
      
      const isToday = 
        day === today.getDate() && 
        currentMonth === today.getMonth() && 
        currentYear === today.getFullYear();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''}`}
          style={{ backgroundColor }}
          title={`${dateString}: ${streakCount} task${streakCount !== 1 ? 's' : ''} completed`}
        >
          <span className="day-number">{day}</span>
          {streakCount > 0 && (
            <span className="streak-count">{streakCount}</span>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="month-nav-btn" onClick={goToPreviousMonth}>
          ‹
        </button>
        <div className="month-title">
          <h2>{monthNames[currentMonth]} {currentYear}</h2>
          <button className="today-btn" onClick={goToToday}>Today</button>
        </div>
        <button className="month-nav-btn" onClick={goToNextMonth}>
          ›
        </button>
      </div>
      
      <div className="calendar-weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="calendar-grid">
        {generateCalendarDays()}
      </div>
    </div>
  );
}

export default Calendar;