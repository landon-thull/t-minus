export const tMinus = (end: Date, start?: Date): String => {
  // seconds between two events
  let delta = (start ? end.getTime() - start.getTime() : end.getTime() - Date.now()) / 1000;

  // event in past (+) or future (-)
  let sign = delta < 0 ? "+" : "-";

  if (delta < 0) {
    delta = -delta;
  }

  let hr = Math.floor(delta / 3600);
  let min = Math.floor(delta / 60) % 60;
  let sec = Math.floor(delta % 60);

  let hrStr = hr < 10 ? `0${hr}` : `${hr}`;
  let minStr = min < 10 ? `0${min}` : `${min}`;
  let secStr = sec < 10 ? `0${sec}` : `${sec}`;

  // format - HH:MM:SS
  let result = `T${sign}${hrStr}:${minStr}:${secStr}`;

  return result;
}
