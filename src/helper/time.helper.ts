interface TimesProp {
  startTime: string;
  endTime: string;
}

export function getTimes(): TimesProp[] {
  const times: TimesProp[] = [];
  const startDate = new Date();

  // Set start time to 8:00 AM
  startDate.setHours(8, 0, 0, 0);

  // Loop through 96 intervals as there are 96 15-minutes interval in 24 hours
  for (let i = 0; i < 96; i++) {
    let hours = startDate.getHours();
    let minutes = startDate.getMinutes();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    let formattedStartTime = `${hours}:${
      minutes === 0 ? "00" : minutes
    } ${meridiem}`;

    // Create a new Date object for end time (15 minutes after start time)
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 15);

    let endHours = endDate.getHours();
    let endMinutes = endDate.getMinutes();
    let endMeridiem = endHours >= 12 ? "PM" : "AM";
    endHours = endHours % 12 || 12; // Convert to 12-hour format
    let formattedEndTime = `${endHours}:${
      endMinutes === 0 ? "00" : endMinutes
    } ${endMeridiem}`;

    // Push the start and end times to the array
    times.push({ startTime: formattedStartTime, endTime: formattedEndTime });

    // Increment by 15 minutes for the next slot
    startDate.setMinutes(startDate.getMinutes() + 15);
  }

  return times;
}
