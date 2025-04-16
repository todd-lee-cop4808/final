export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const secondsAgo = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  let relativeTime = 'just now';

  for (let key in intervals) {
    const seconds = intervals[key];
    const value = Math.floor(secondsAgo / seconds);
    if (value > 0) {
      relativeTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-value, key);
      break;
    }
  }

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${formattedDate} (${relativeTime})`;
}