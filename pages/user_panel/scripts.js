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

