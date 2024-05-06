
// Sample data
const patient_data = [
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },
  { patient_id: '#P-00014', patient_id_name: 'Tom Jones', dentist: 'Dr. Samantha', request: 'Dental Opinion', tx_estimate: '$12000', dob: '05/23/2000', status: 'Pending Report' },



];


// Constants
const rowsPerPage = 10;

// Function to render table rows
function renderPatientTable(page) {
  const tableBody = document.getElementById('patient-dash-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, patient_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    // Randomly select class
    let tx_est_class = Math.random() < 0.5 ? 'tx-est-gray' : 'tx-est-green';
    // get status
    let status_btn_class = "";
    // check status conditional class
    if (patient_data[i].status === 'Pending Report' || patient_data[i].status === 'Unavailable') {
      status_btn_class = 'status-btn-gray';
    } else {
      status_btn_class = 'status-btn-green'
    }
    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td><div class="profile"></div></td>
      <td><button class="patient-link">${patient_data[i].patient_id}</button></td>
      <td>${patient_data[i].patient_id_name}</td>
      <td>${patient_data[i].dentist}</td>
      <td>${patient_data[i].request}</td>
      <td ><div class="${tx_est_class}">${patient_data[i].tx_estimate}</div></td>
      <td>${patient_data[i].dob}</td>
      <td><button class="${status_btn_class}">${patient_data[i].status}</button></td>
      <td><button class="menu-table"><i class="fa-solid fa-ellipsis-vertical"></i></button></td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderPatientPagination() {
  const patient_pagination = document.getElementById('patient-dash-pagination');
  patient_pagination.innerHTML = '';

  const patient_totalPages = Math.ceil(patient_data.length / rowsPerPage);

  // Previous button
  const prevPageItem = document.createElement('li');
  prevPageItem.classList.add('page-item');
  const prevPageLink = document.createElement('a');
  prevPageLink.classList.add('page-link');
  prevPageLink.classList.add('nav-page-link');
  prevPageLink.href = '#';
  prevPageLink.textContent = 'Previous';
  prevPageLink.addEventListener('click', () => {
    const prevPage = Math.max(currentPage - 1, 1);
    renderPatientTable(prevPage);
  });
  prevPageItem.appendChild(prevPageLink);
  patient_pagination.appendChild(prevPageItem);

  for (let i = 1; i <= patient_totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      renderPatientTable(i);
    });
    pageItem.appendChild(pageLink);
    patient_pagination.appendChild(pageItem);
  }

  // Next button
  const nextPageItem = document.createElement('li');
  nextPageItem.classList.add('page-item');
  const nextPageLink = document.createElement('a');
  nextPageLink.classList.add('page-link');
  nextPageLink.classList.add('nav-page-link');
  nextPageLink.href = '#';
  nextPageLink.textContent = 'Next';
  nextPageLink.addEventListener('click', () => {
    const nextPage = Math.min(currentPage + 1, patient_totalPages);
    renderPatientTable(nextPage);
  });
  nextPageItem.appendChild(nextPageLink);
  patient_pagination.appendChild(nextPageItem);
}

// Function to initialize table
function initPatientTable() {
  renderPatientTable(1);
  renderPatientPagination();
}
// Initialize table
initPatientTable();


// UPDATE LABEL FOR TABLE 
// Find the length of the dentist_data array
const totalEntries = patient_data.length;

// Update the text in the .table-page element
const tablePageElement = document.querySelector('.table-page');
tablePageElement.textContent = `Showing ${rowsPerPage > totalEntries ? totalEntries : rowsPerPage} from ${totalEntries}`;