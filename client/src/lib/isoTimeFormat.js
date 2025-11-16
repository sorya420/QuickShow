// const isoTimeFormat = (dateTime) => {
//     const date = new Date(dateTime);
//     const localTime = date.date.toLocaleTimeString("en-US", {
//         hour: "2-digit",
//         minutes:"2-digit",
//         hour12:true,
//     });
//     return localTime;
// }

// export default isoTimeFormat;

const isoTimeFormat = (dateTime) => {
  if (!dateTime) return "--"; // Prevent crashes if input is undefined

  const date = new Date(dateTime);

  if (isNaN(date.getTime())) return dateTime; // Fallback if invalid date string

  const localTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit", // ✅ correct key
    hour12: true,
  });

  return localTime;
};

export default isoTimeFormat;