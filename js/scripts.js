const sideMenu = document.querySelector('#side_bar');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

let isMenuOpen = false; // Variable to track menu state

// Function to open the menu
function openMenu() {
  sideMenu.style.display = "block";
  isMenuOpen = true;
}

// Function to close the menu
function closeMenu() {
  sideMenu.style.display = "none";
  isMenuOpen = false;
}

menuBtn.addEventListener('click', () => {
  openMenu();
});

closeBtn.addEventListener('click', () => {
  closeMenu();
});

// Event listener for window resize
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;

  // Check if the menu was closed
  if (!isMenuOpen && windowWidth > 768) {
    openMenu(); // Open the menu
  } else if (!isMenuOpen) {
    sideMenu.style.display = "none"; // Hide the menu if it was closed and window width is less than or equal to 768px
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   // Handle navigation clicks
//   document.querySelectorAll('side .sidebar a').forEach(function (link) {
//     link.addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent default link behavior

//       var pageUrl = this.getAttribute('href'); // Get the URL of the clicked link

//       // Fade out the content
//       document.getElementsByClassName('page').item(0).classList.add('hidden');

//       window.location.href = pageUrl;
//       // Wait for the transition to complete
//       setTimeout(function () {
//         // Load the new page
//       }, 200); // Adjust the delay to match the transition duration
//     });
//   });
// });



// Function to adjust margin-top of .main-content based on top bar height
function adjustMainContentMargin() {
  // Check if the screen width is less than or equal to 768px (typical for mobile devices)
  if (window.innerWidth <= 768) {
    // Get the height of the fixed top bar
    const topBarHeight = document.querySelector('main .top').offsetHeight;
    // console.log(topBarHeight)
    // Adjust the margin-top of the .main-content
    document.querySelector('main .main-content').style.marginTop = topBarHeight + 'px';
  } else {
    // Reset margin-top if not on mobile
    document.querySelector('.main-content').style.marginTop = '0';
  }
}

// Call the function initially
adjustMainContentMargin();

// Add event listener for window resize
window.addEventListener('resize', adjustMainContentMargin);


// Function to refresh the CSS of the .side element
function refreshSideStyles() {
  const sideElement = document.querySelector('.side');

  // Apply the necessary styles to .side
  sideElement.style.backgroundColor = 'var(--clr-white)';
  sideElement.style.marginRight = '0.5rem';
  sideElement.style.boxShadow = '0px 0px 0.3rem 0px rgba(0, 0, 0, 0.1)';
  // Add more styles as needed
}

// Call the function initially
refreshSideStyles();

// Add event listener for window resize
window.addEventListener('resize', function () {
  // Call the function to refresh .side styles on resize
  refreshSideStyles();
});



// DOCTOR AND PATIENT LINKS
// var patientLinks = document.querySelectorAll('.patient-link');
// var doctorLinks = document.querySelectorAll('.doctor-link');

// patientLinks.forEach(function (patientLink) {
//   patientLink.addEventListener('click', function () {
//     // Hide report-info and show right-patient-info
//     reportInfo.style.display = 'none';
//     rightPatientInfo.style.display = 'block';
//   });
// });

// doctorLinks.forEach(function (doctorLink) {
//   doctorLink.addEventListener('click', function () {
//     // Hide right-patient-info and show report-info
//     rightPatientInfo.style.display = 'none';
//     reportInfo.style.display = 'block';
//   });
// });