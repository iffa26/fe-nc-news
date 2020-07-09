import React from "react";

class FormatDate extends React.Component {
  render() {
    const { rawDateString } = this.props;
    return <span> {this.formatDate(rawDateString)} </span>;
  }

  formatDate = (rawDateString) => {
    const todayDate = new Date();
    const rawDate = new Date(rawDateString);

    const todayTime = todayDate.getTime();
    const rawDateTime = rawDate.getTime();

    const secondsDiff = Math.floor((todayTime - rawDateTime) / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const weeksDiff = Math.floor(daysDiff / 7);
    const yearsDiff = todayDate.getFullYear() - rawDate.getFullYear();
    const monthsDiff =
      yearsDiff * 12 + todayDate.getMonth() - rawDate.getMonth();

    if (yearsDiff > 0) return yearsDiff + " years";
    if (monthsDiff > 0) return monthsDiff + " months";
    if (daysDiff > 6) return weeksDiff + " weeks";
    if (daysDiff > 0) return daysDiff + " days";
    if (minutesDiff > 59) return hoursDiff + " hours";
    if (minutesDiff > 1) return minutesDiff + " minutes";
    return secondsDiff + " seconds";
  };
}

export { FormatDate };
