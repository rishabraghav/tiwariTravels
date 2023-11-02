export default function calculateTimeDifference(boardingTime, droppingTime) {
    const [boardingHours, boardingMinutes] = boardingTime.split(':').map(Number);
    const [droppingHours, droppingMinutes] = droppingTime.split(':').map(Number);
  
    // Convert everything to minutes
    const boardingTotalMinutes = boardingHours * 60 + boardingMinutes;
    const droppingTotalMinutes = droppingHours * 60 + droppingMinutes;
  
    // Calculate the time difference in minutes
    let timeDiffInMinutes = droppingTotalMinutes - boardingTotalMinutes;
  
    // Handle cases where the dropping time is before the boarding time (e.g., next day)
    if (timeDiffInMinutes < 0) {
      timeDiffInMinutes += 24 * 60; // 24 hours in a day * 60 minutes
    }
  
    // Convert back to hours and minutes
    const hours = Math.floor(timeDiffInMinutes / 60);
    const minutes = timeDiffInMinutes % 60;
  
    return { hours, minutes };
  }