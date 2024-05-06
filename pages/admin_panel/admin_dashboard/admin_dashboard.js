document.addEventListener('DOMContentLoaded', function () {
  var patientLinks = document.querySelectorAll('.patient-link');
  var doctorLinks = document.querySelectorAll('.doctor-link');
  var reportLinks = document.querySelectorAll('.report-btn');
  var statusLinks = document.querySelectorAll('.status-btn');
  var reportInfo = document.querySelector('.report-info');
  var rightPatientInfo = document.querySelector('.right-patient-info');

  // patientLinks.forEach(function (patientLink) {
  //   patientLink.addEventListener('click', function () {
  //     // Hide report-info and show right-patient-info
  //     reportInfo.style.display = 'none';
  //     rightPatientInfo.style.display = 'block';
  //   });
  // });
  statusLinks.forEach(function (statusLink) {
    statusLink.addEventListener('click', function () {
      // Hide report-info and show right-patient-info
      reportInfo.style.display = 'none';
      rightPatientInfo.style.display = 'block';
    });
  });

  // Add event listeners for doctor links
  reportLinks.forEach(function (reportLink) {
    reportLink.addEventListener('click', function () {
      // Hide right-patient-info and show report-info
      rightPatientInfo.style.display = 'none';
      reportInfo.style.display = 'block';
    });
  });

  // doctorLinks.forEach(function (doctorLink) {
  //   doctorLink.addEventListener('click', function () {
  //     // Hide right-patient-info and show report-info
  //     rightPatientInfo.style.display = 'none';
  //     reportInfo.style.display = 'block';
  //   });
  // });
});



// Sample data
const patient_data = [
  { patient_id: '#P-00014', request: 'Dental', registration: '26/02/2020', num_days: '5', status: 'Add Records' },
  { patient_id: '#P-00015', request: 'Orthodontic', registration: '26/02/2020', num_days: '10', status: 'Add CC' },
  { patient_id: '#P-00018', request: 'Dental', registration: '26/02/2020', num_days: '10', status: 'Not Submitted' },
  { patient_id: '#P-00018', request: 'Dental', registration: '26/02/2020', num_days: '10', status: 'Approve Request' },
  { patient_id: '#P-00018', request: 'Dental', registration: '26/02/2020', num_days: '10', status: 'Approve Request' },


];
const dentist_data = [
  { patient_id: '#P-00014', request: 'Dental', dentist: 'Dr John Smith', submitted: '12/22/24', status: 'Report #1' },
  { patient_id: '#P-00014', request: 'Dental', dentist: 'Dr John Smith', submitted: '12/22/24', status: 'Report #2' },
  { patient_id: '#P-00014', request: 'Dental', dentist: 'Dr John Smith', submitted: '12/22/24', status: 'Report #1' },
  { patient_id: '#P-00014', request: 'Dental', dentist: 'Dr John Smith', submitted: '12/22/24', status: 'Report #2' },
  { patient_id: '#P-00014', request: 'Dental', dentist: 'Dr John Smith', submitted: '12/22/24', status: 'Report #1' },


];

// Constants
const rowsPerPage = 4;

// Function to render table rows
function renderPatientTable(page) {
  const tableBody = document.getElementById('patient-info-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, patient_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    let status_btn_class = patient_data[i].status.toLowerCase().replace(/\s+/g, '-');
    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td><button class="patient-link">${patient_data[i].patient_id}</button></td>
      <td>${patient_data[i].request}</td>
      <td>${patient_data[i].registration}</td>
      <td>${patient_data[i].num_days}</td>
      <td><div class="${status_btn_class}"><button class="status-btn">${patient_data[i].status}</button></div></td>
      <td><button class="edit-btn"><i class="fas fa-edit"></i></button></td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderPatientPagination() {
  const patient_pagination = document.getElementById('patient-pagination');
  patient_pagination.innerHTML = '';

  const patient_totalPages = Math.ceil(patient_data.length / rowsPerPage);


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
}

// Function to render dentist approve table rows
function renderDentistTable(page) {
  const tableBody = document.getElementById('dentist-info-table');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, dentist_data.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    let status_btn_class = dentist_data[i].status.replace(/#/g, '').toLowerCase().replace(/\s+/g, '-');

    // Add table-row class to the created row
    row.classList.add('table-row');
    row.innerHTML = `
      <td><button class="patient-link">${dentist_data[i].patient_id}</button></td>
      <td>${dentist_data[i].request}</td>
      <td><button class="doctor-link">${dentist_data[i].dentist}</button></td>
      <td>${dentist_data[i].submitted}</td>
      <td><div class="${status_btn_class}"><button class="report-btn">${dentist_data[i].status}</button></div></td>
      <td><button class="edit-btn"><i class="fas fa-edit"></i></button></td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to render pagination
function renderDentistPagination() {
  const dentist_pagination = document.getElementById('dentist-pagination');
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
      renderDentistTable(i);
    });
    pageItem.appendChild(pageLink);
    dentist_pagination.appendChild(pageItem);
  }
}

// Function to initialize table
function initPatientTable() {
  renderPatientTable(1);
  renderPatientPagination();
}
function initDentistTable() {
  renderDentistTable(1);
  renderDentistPagination();
}

// Initialize table
initPatientTable();
initDentistTable();



// UPDATE LABEL FOR TABLE 
// Find the length of the patient_data array
const totalEntriespatient = patient_data.length;

// Update the text in the .table-page element
const tablePageElementPatient = document.querySelector('.table-page.patient');
tablePageElementPatient.textContent = `Showing ${rowsPerPage > totalEntriespatient ? totalEntriespatient : rowsPerPage} from ${totalEntriespatient}`;


// UPDATE LABEL FOR TABLE 
// Find the length of the dentist_data array
const totalEntriesDentist = dentist_data.length;

// Update the text in the .table-page element
const tablePageElementDentist = document.querySelector('.table-page.dentist');
tablePageElementDentist.textContent = `Showing ${rowsPerPage > totalEntriesDentist ? totalEntriesDentist : rowsPerPage} from ${totalEntriesDentist}`;
