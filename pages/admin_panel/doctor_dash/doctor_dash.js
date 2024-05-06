
// Sample data
const dentist_data = [

  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', accepted: '10', declined: '5', delayed: '0', completed: '4' },
];

// Constants
const rowsPerPage = 10;

// Function to render table rows
function renderDentistDashTable(page) {
  const tableBody = document.getElementById('dentist-dash-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, dentist_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td>${dentist_data[i].dentist}</td>
      <td>${dentist_data[i].speciality}</td>
      <td>${dentist_data[i].email}</td>
      <td>${dentist_data[i].mobile}</td>
      <td>${dentist_data[i].member_since}</td>
      <td>${dentist_data[i].accepted}</td>
      <td>${dentist_data[i].declined}</td>
      <td>${dentist_data[i].delayed}</td>
      <td>${dentist_data[i].completed}</td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderDentistDashPagination() {
  const dentist_pagination = document.getElementById('dentist-dash-pagination');
  dentist_pagination.innerHTML = '';

  const dentist_totalPages = Math.ceil(dentist_data.length / rowsPerPage);


  for (let i = 1; i <= dentist_totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      renderDentistDashTable(i);
    });
    pageItem.appendChild(pageLink);
    dentist_pagination.appendChild(pageItem);
  }

}

// Function to initialize table
function initDentistDashTable() {
  renderDentistDashTable(1);
  renderDentistDashPagination();
}
// Initialize table
initDentistDashTable();


// UPDATE LABEL FOR TABLE 
// Find the length of the dentist_data array
const totalEntries = dentist_data.length;

// Update the text in the .table-page element
const tablePageElement = document.querySelector('.table-page');
tablePageElement.textContent = `Showing ${rowsPerPage > totalEntries ? totalEntries : rowsPerPage} from ${totalEntries}`;