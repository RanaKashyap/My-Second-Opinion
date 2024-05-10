// Sample data
const data = [
  { service: 'Second Opinion', date: '12/12/2024', },
  { service: 'Find a dentist', date: '12/12/2024', },
  // Add more data objects as needed
];

// Function to create table rows and cells
function createTableRows(data) {
  const tableBody = document.getElementById('request-table-body');

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.service}</td>
      <td>${item.date}</td>
      <td><button class="add-record-btn">Add dental Records</button></td>
      <td><button><i class="fa-solid fa-trash"></i></button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Call the function to populate the table with data
createTableRows(data);


// CALENDAR APPOINTMENT

const monthYearElement = document.getElementById('monthYear')
const datesElement = document.getElementById('dates')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let currentDate = new Date();

const updateCalendar = () => {
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  const firstDay = new Date(currentYear, currentMonth, 0)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const totalDays = lastDay.getDate()
  const firstDayIndex = firstDay.getDay()
  const lastDayIndex = lastDay.getDay()

  const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  monthYearElement.textContent = monthYearString

  let datesHTML = ''


  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1)
    datesHTML += `<div class="date inactive>${prevDate.getDate()}</div>`

  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i)
    const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : ''
    datesHTML += `<div class="date ${activeClass}">${i}</div> `

  }

  for (let i = 1; i < 7 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i)
    datesHTML += `<div class="date inactive>${nextDate.getDate()}</div>`

  }

  datesElement.innerHTML = datesHTML
  console.log(datesElement.innerHTML)

}

// Function to update time options based on selected date
function updateTimes() {
  const timeSelect = document.getElementById('time');
  timeSelect.innerHTML = '';
  const placeholderOption = document.createElement('option');
  placeholderOption.value = '';
  placeholderOption.textContent = '00:00 AM';
  timeSelect.appendChild(placeholderOption);
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']; // Times from 9 AM to 4 PM
  for (let time of times) {
    const option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  }
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar()

  updateTimes();
})

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar()

  updateTimes();
})

updateCalendar()

updateTimes();
