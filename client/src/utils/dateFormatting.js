export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  function getOridinalSuffix(n) {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const dayWithSuffix = `${day}${getOridinalSuffix(day)}`;
  return `${dayWithSuffix} ${month} ${year}`;
}

export const formatDateInput = (isoDate) => {
  const date = new Date(isoDate);
  return date.toISOString().split("T")[0]; // gives 'YYYY-MM-DD'
};

export const formatDateTime = (isoDate) => {
  const date = new Date(isoDate);

  // Format date as YYYY-MM-DD
  const formattedDate = date.toISOString().split("T")[0];

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 => 12

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return `${formattedDate} ${formattedTime}`;
};

export const formatTimeTo12Hour = (time24) => {
  const [hourStr, minuteStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
};
