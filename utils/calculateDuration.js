// utils/calculateDuration.js
export function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);
  
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    return `${years > 0 ? years + ' yrs ' : ''}${months > 0 ? months + ' mos' : ''}`.trim();
  }
  