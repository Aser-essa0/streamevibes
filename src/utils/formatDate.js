function formatDate(date = "") {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateArr = date?.split("-");
  const year = dateArr[2];
  const month = months[+dateArr[1]];
  const day = dateArr[0];

  return `${year} ${month} ${day}`;
}

export { formatDate };
