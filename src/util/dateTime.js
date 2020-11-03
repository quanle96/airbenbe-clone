const DateTimer = {
  weatherTimeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
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
    // var year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    const time =
      date + " " + month ;
    return time;
  },
};
export default DateTimer;
