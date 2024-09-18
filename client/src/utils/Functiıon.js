export const FlightTime = ({ scheduleTime, landingTime }) => {
  console.log(scheduleTime, landingTime);
  const scheduleDateTime = new Date(scheduleTime);
  const actualLandingTime = new Date(landingTime);

  const durations = actualLandingTime - scheduleDateTime;
  const durationMinutes = Math.floor(durations / (1000 * 60));

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  if (hours > 0) {
    return `${hours}h:${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};




