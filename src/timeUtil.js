export function formatTime(date, nullValue = "None") {
  if (!date) {
    return nullValue;
  } else {
    return date.toLocaleTimeString();
  }
}

export function parseTime(timeString) {
  if (!timeString) {
    return null;
  }
  const parts = timeString.split(":");
  if (parts.length !== 2) {
    return null;
  }
  const date = new Date();
  date.setHours(parseInt(parts[0]));
  date.setMinutes(parseInt(parts[1]));
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

export function diffInSeconds(later, earlier) {
  const millis = later - earlier;
  return Math.round(millis / 1000);
}

export function formatDiffInSeconds(diff) {
  let seconds = diff % 60;
  diff = Math.floor(diff / 60);
  let minutes = diff % 60;
  let hours = Math.floor(diff / 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}:${seconds}`;
}