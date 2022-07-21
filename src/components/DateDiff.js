
import moment from 'moment';
import React from 'react';

const monthDiff = () => {
 const now = moment();
 const end = moment([2029, 11, 31]);
 return end.diff(now, 'months');
};

function DateDiff() {
  const result = monthDiff();
    return <p>There are {result} months to go.</p>;
  }

export default DateDiff;