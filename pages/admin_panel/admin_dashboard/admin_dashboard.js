document.addEventListener('DOMContentLoaded', function () {
  var patientLinks = document.querySelectorAll('.patient-link');
  var doctorLinks = document.querySelectorAll('.doctor-link');
  var reportInfo = document.querySelector('.report-info');
  var rightPatientInfo = document.querySelector('.right-patient-info');

  patientLinks.forEach(function (patientLink) {
    patientLink.addEventListener('click', function () {
      // Hide report-info and show right-patient-info
      reportInfo.style.display = 'none';
      rightPatientInfo.style.display = 'block';
    });
  });

  // Add event listeners for doctor links
  doctorLinks.forEach(function (doctorLink) {
    doctorLink.addEventListener('click', function () {
      // Hide right-patient-info and show report-info
      rightPatientInfo.style.display = 'none';
      reportInfo.style.display = 'block';
    });
  });
});