import { monthMap } from "./constants";

export function formatDate(dateString?: string) {
  if (!dateString) return null;
  const date = new Date(dateString);
  const monthNames = Object.keys(monthMap);

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
