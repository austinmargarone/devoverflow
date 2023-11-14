import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerMonth = millisecondsPerDay * 30;
  const millisecondsPerYear = millisecondsPerDay * 365;

  const elapsed = new Date().getTime() - createdAt.getTime();

  if (elapsed < millisecondsPerMinute / 3) {
    return "just now";
  }

  if (elapsed < millisecondsPerMinute) {
    return "less than a minute ago";
  } else if (elapsed < millisecondsPerHour) {
    return Math.round(elapsed / millisecondsPerMinute) + " minutes ago";
  } else if (elapsed < millisecondsPerDay) {
    return Math.round(elapsed / millisecondsPerHour) + " hours ago";
  } else if (elapsed < millisecondsPerMonth) {
    return Math.round(elapsed / millisecondsPerDay) + " days ago";
  } else if (elapsed < millisecondsPerYear) {
    return Math.round(elapsed / millisecondsPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / millisecondsPerYear) + " years ago";
  }
};
