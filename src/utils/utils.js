// utils.js
export const scaleDate = (date, minDate, maxDate) => {
    const dateObj = new Date(date);
    const minDateObj = new Date(minDate);
    const maxDateObj = new Date(maxDate);
  
    const totalRange = maxDateObj - minDateObj;
    const dateRange = dateObj - minDateObj;
  
    return (dateRange / totalRange) * 100; // Returns a percentage
  };