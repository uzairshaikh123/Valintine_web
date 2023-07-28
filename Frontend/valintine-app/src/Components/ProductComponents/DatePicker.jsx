import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handledate =(date)=>{
    console.log(date);
    setStartDate(date);
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => handledate(date)}
      withPortal
      minDate={Date.now()}
      
    />
  );
};



