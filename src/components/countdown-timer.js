import moment from 'moment';
import React from 'react';

const timeUntil = () => {
    const now = moment();
    const end = moment([2029, 11, 31]);
    const duration = moment.duration(moment(end).diff(moment(now)));
    console.log('duration', duration)

    // const years = duration.years();
    // const yearsFormatted = `${years} years`;

    // const months = duration.months();
    // const monthsFormatted = `${months} months`;

    const days = Math.floor(duration.asDays()); 
    const daysFormatted = days ? `${days}d ` : ''; 

    const hours = duration.hours();
    const hoursFormatted = `${hours} hours `;

    const minutes = duration.minutes();
    const minutesFormatted = `${minutes} mins `;

    const seconds = duration.seconds();
    const secondsFormatted = `${seconds} secs`;

    return [daysFormatted, hoursFormatted, minutesFormatted, secondsFormatted].join('');
}

function Countdown() {
    const result = timeUntil();
      return <p>{result}</p>;
    }
  
  export default Countdown;
