import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const excludedDates = [new Date('2023-07-30'), new Date('2023-08-05'), new Date('2023-08-15')];
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  const handledate=(date)=>{
    setStartDate(date)
    console.log(startDate);
    const inputDateString = date
const dateObject = new Date(inputDateString);
const formattedDate = dateObject.toLocaleDateString('en-CA'); // Use the desired locale

console.log(formattedDate); // Output: "2023-07-30"
  }

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={(date) => handledate(date)}
      timeClassName={handleColor}
      minDate={new Date()}
      excludeDates={excludedDates}
      dateFormat="MMMM d, yyyy"
    />
  );
};