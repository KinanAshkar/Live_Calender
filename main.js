const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const days = document.querySelector(".days");
const monthName = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthName + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthName, 1).getDay();
const monthOfYear = [
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
  "December",
];

month.innerText = monthOfYear[monthName];
fullDate.innerText = new Date().toDateString();

let day = "";

for (let i = firstDay; i > 0; i--) {
  day += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    day += `<div class="today">${i}</div>`;
  } else {
    day += `<div>${i}</div>`;
  }
}

days.innerHTML = day;
