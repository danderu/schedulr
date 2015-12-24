import Calendar from './domain/calendar';

const calendar = new Calendar();

let table = document.createElement('table');
calendar.monthDays(2015, 11).forEach((week) => {
  let row = table.appendChild(document.createElement('tr'));
  week.forEach((day) => {
    let cell = row.appendChild(document.createElement('td'));
    cell.innerHTML = day.toString();
  });
});

document.body.appendChild(table);
