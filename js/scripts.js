const sideMenu = document.querySelector('#side_bar');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = "block"
})
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = "none"
})


document.addEventListener('DOMContentLoaded', function () {
  // Handle navigation clicks
  document.querySelectorAll('side .sidebar a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      var pageUrl = this.getAttribute('href'); // Get the URL of the clicked link

      // Fade out the content
      document.getElementsByClassName('page').item(0).classList.add('hidden');

      // Wait for the transition to complete
      setTimeout(function () {
        // Load the new page
        window.location.href = pageUrl;
      }, 200); // Adjust the delay to match the transition duration
    });
  });
});
