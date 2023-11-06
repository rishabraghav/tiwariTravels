export default function formatDate(inputDate) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const dateObj = new Date(inputDate);
    const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];
    const dayOfMonth = dateObj.getUTCDate();
    const month = months[dateObj.getUTCMonth()];
  
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  }

  export function getTomorrowDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    // Formatting the date as "YYYY-MM-DD"
    const tomorrowDateString = tomorrow.toISOString().split('T')[0];
  
    return tomorrowDateString;
  }
  export function removeDayFromDate(inputString) {
    const dateObject = new Date(inputString);
  
    if (isNaN(dateObject.getDate())) {
      // If the input string is not a valid date, return the original string
      return inputString;
    }
  
    // Extracting day and date
    const day = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
    const date = dateObject.getDate();
    const month = dateObject.toLocaleDateString('en-US', { month: 'short' });
  
    return `${date} ${month}`;
  }