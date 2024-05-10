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
