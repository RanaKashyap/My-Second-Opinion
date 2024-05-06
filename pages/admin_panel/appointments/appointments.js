
// Sample data
const appointments_data = [
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },
  { patient_id: '#P-00014', patient_name: 'Ashton Cox', email: 'test@email.com', gender: 'male', date: ' 02/15/2018', time: '10:18', mobile: '1234567890', doctor: 'Dr. Rajesh' },

];
// Constants
const rowsPerPage = 10;

// Function to render table rows
function renderAppointmentsTable(page) {
  const tableBody = document.getElementById('appointments-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, appointments_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');

    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td><button class="patient-link">${appointments_data[i].patient_id}</button></td>
      <td>${appointments_data[i].patient_name}</td>
      <td>${appointments_data[i].email}</td>
      <td>${appointments_data[i].gender}</td>
      <td>${appointments_data[i].date}</td>
      <td>${appointments_data[i].time}</td>
      <td>${appointments_data[i].mobile}</td>
      <td>${appointments_data[i].doctor}</td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderAppointmentsPagination() {
  const appointments_pagination = document.getElementById('appointments-pagination');
  appointments_pagination.innerHTML = '';

  const appointments_totalPages = Math.ceil(appointments_data.length / rowsPerPage);


  for (let i = 1; i <= appointments_totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      renderAppointmentsTable(i);
    });
    pageItem.appendChild(pageLink);
    appointments_pagination.appendChild(pageItem);
  }

}

// Function to initialize table
function initAppointmentsTable() {
  renderAppointmentsTable(1);
  renderAppointmentsPagination();
}
// Initialize table
initAppointmentsTable();


// UPDATE LABEL FOR TABLE 
// Find the length of the appointments_data array
const totalEntries = appointments_data.length;

// Update the text in the .table-page element
const tablePageElement = document.querySelector('.table-page');
tablePageElement.textContent = `Showing ${rowsPerPage > totalEntries ? totalEntries : rowsPerPage} from ${totalEntries}`;