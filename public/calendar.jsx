import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import Header from './header.jsx';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
 
// Render the Calendar 
function Calendar (props) {
  return (  
    <InfiniteCalendar
      width={600}
      height={800}
      selected={today}
      disabledDays={[0,6]}
      minDate={lastWeek}
      displayOptions={{
        layout: 'landscape',
        showOverlay: false,
        shouldHeaderAnimate: false
      }}
    />
  )
}

export default Calendar;