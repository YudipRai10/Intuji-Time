/**
 * Get today's date
 */
export function getTodayDate(): string {
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  const newFormatDate = formattedDate.replace(/^(\w+)(\s+)/, "$1, $2");
  return newFormatDate;
}

/**
 * Get previous day
 */
export function getPrevDate(): string {
  const prevDate = new Date();
  prevDate.setDate(prevDate.getDate() - 1);
  const formatPrevData = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(prevDate);
  return formatPrevData;
}

/**
 * Get next day
 */
export function getNextDate(): string {
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);
  const formatNextDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(nextDate);
  return formatNextDate;
}
