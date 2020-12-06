import React from 'react';

const Notification = ({ time, title, good }) => {
  return (
    <div className="notification">
      <p className="notification-time">{time}</p>
      <p className="notification-title">{title}</p>
      <p className="notification-good">{good}</p>
    </div>
  );
};

export default Notification;
