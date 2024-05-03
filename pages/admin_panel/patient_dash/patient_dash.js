document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.getElementById('tableBody');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const rowsPerPage = 9; // Number of rows to display per page
  let currentPage = 1; // Current page number
  let totalRows = 15; // Total number of rows

  // Initial table setup
  updateTable();

  function updateTable() {
    const sampleRows = document.querySelector('.rows table').innerHTML;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, totalRows);

    let rowsHTML = '';
    for (let i = startIndex + 1; i <= endIndex; i++) {
      rowsHTML += sampleRows.replace(/Patient \d+/g, `Patient ${i}`);
    }
    tableBody.innerHTML = rowsHTML;

    // const rows = tableBody.querySelectorAll('tr');
    // rows.forEach(row => {
    //   const profileCell = document.createElement('td');
    //   const profileSquare = document.createElement('div');
    //   profileSquare.classList.add('profile');
    //   profileCell.appendChild(profileSquare);
    //   row.insertBefore(profileCell, row.firstChild);
    // });


    // Apply styling to buttons after generating rows
    const patientInfoButtons = tableBody.querySelectorAll('.patient-info');
    patientInfoButtons.forEach(button => {
      button.style.backgroundColor = 'transparent';

    });

    const dentistInfoButtons = tableBody.querySelectorAll('.dentist-info');
    dentistInfoButtons.forEach(button => {
      button.style.backgroundColor = 'transparent';

    });
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      updateTable();
    }
  }

  function goToNextPage() {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updateTable();
    }
  }

  prevPageBtn.addEventListener('click', goToPreviousPage);
  nextPageBtn.addEventListener('click', goToNextPage);
});
