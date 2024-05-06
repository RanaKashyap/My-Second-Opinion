
// Sample data
const billings_data = [

  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
  { dentist: 'Olivia Jean', speciality: 'Dentist', email: 'jean@gmail.com', mobile: '534-234-2234', member_since: '12/12/2023', paid: '1234' },
];

// Constants
const rowsPerPage = 10;

// Function to render table rows
function renderBillingsDashTable(page) {
  const tableBody = document.getElementById('billings-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, billings_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td><button class="patient-link">${billings_data[i].dentist}</button></td>
      <td>${billings_data[i].speciality}</td>
      <td>${billings_data[i].email}</td>
      <td>${billings_data[i].mobile}</td>
      <td>${billings_data[i].member_since}</td>
      <td>$${billings_data[i].paid}</td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderBillingsPagination() {
  const billings_pagination = document.getElementById('billings-pagination');
  billings_pagination.innerHTML = '';

  const dentist_totalPages = Math.ceil(billings_data.length / rowsPerPage);


  for (let i = 1; i <= dentist_totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      renderBillingsDashTable(i);
    });
    pageItem.appendChild(pageLink);
    billings_pagination.appendChild(pageItem);
  }

}

// Function to initialize table
function initBillingsTable() {
  renderBillingsDashTable(1);
  renderBillingsPagination();
}
// Initialize table
initBillingsTable();


// UPDATE LABEL FOR TABLE 
// Find the length of the billings_data array
const totalEntries = billings_data.length;

// Update the text in the .table-page element
const tablePageElement = document.querySelector('.table-page');
tablePageElement.textContent = `Showing ${rowsPerPage > totalEntries ? totalEntries : rowsPerPage} from ${totalEntries}`;
