import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComp = () => {
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker style={{width:"100%"}} placeholderText="📅 Select date & Time " showTimeSelect  onChange={(date) => setStartDate(date)} timeClassName={handleColor} />
  );
};