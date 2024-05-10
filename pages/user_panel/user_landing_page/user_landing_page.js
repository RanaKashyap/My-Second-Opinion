// Sample data
const data = [
  { id: 'Te154235', date: '12/12/2023', deadline: '5 Days', status: 'Accept/Decline', icon: 'check' },
  { id: 'Te154235', date: '12/12/2023', deadline: '5 Days', status: 'In Progress', icon: 'check' },
  { id: 'Te154235', date: '12/12/2023', deadline: '5 Days', status: 'Completed', icon: 'eye' },
  // Add more data objects as needed
];

// Function to create table rows and cells
function createTableRows(data) {
  const tableBody = document.getElementById('request-table-body');

  data.forEach(item => {
    const row = document.createElement('tr');
    const iconHtml = item.icon === 'eye' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-pen-to-square"></i>';

    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.date}</td>
      <td>${item.deadline}</td>
      <td><div class="status">${item.status}</div></td>
      <td><button>${iconHtml}</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Call the function to populate the table with data
createTableRows(data);
