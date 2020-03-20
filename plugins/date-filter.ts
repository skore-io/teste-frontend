import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = (value: Date | string | number) => {
  return formatDate(value);
};

function formatDate(inputDate:  Date | string | number) {
  if (!inputDate) return ''
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = day + ", " + months[month] + " " + year;
  return formattedDate;
}

Vue.filter('date', dateFilter)
