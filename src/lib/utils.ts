import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (fullName: string): string => {
  if (!fullName) return "";
  return fullName
    .trim() // Remove extra spaces
    .split(/\s+/) // Split by spaces (handles multiple spaces)
    .map((word) => word[0].toUpperCase()) // Take the first letter of each word
    .join("")
    .slice(0, 2); // Join initials together
};
