// Sample data (replace with your actual data)
const data = [

  { file_name: "Documentation", doc_type: 'Remotely', upload_date: "Dec, 29 2023", download: 'Completed' },

  { file_name: "Documentation", doc_type: 'Remotely', upload_date: "Dec, 29 2023", download: 'Completed' },

  { file_name: "Documentation", doc_type: 'Remotely', upload_date: "Dec, 29 2023", download: 'Completed' },

  { file_name: "Documentation", doc_type: 'Remotely', upload_date: "Dec, 29 2023", download: 'Completed' },
  // Add more data objects as needed
];

// Function to create table rows
function createTableRows(data) {
  const tableBody = document.getElementById('data-table');

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td><input class="file-checkbox" type="checkbox"></td>
      <td>${item.file_name}</td>
      <td>${item.doc_type}</td>
      <td>${item.upload_date}</td>
      <td><button class="download-btn">${item.download}</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Call the function to create table rows with data
createTableRows(data);


function addFileInput() {
  // Create file input element
  const fileInput = document.createElement('input');
  fileInput.setAttribute('type', 'file');

  // Append file input to the parent element
  const parentElement = document.querySelector('.additional-photos.smiley-card');
  parentElement.appendChild(fileInput);
}
