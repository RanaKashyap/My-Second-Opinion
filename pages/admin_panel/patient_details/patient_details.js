document.addEventListener('DOMContentLoaded', function () {
  const overviewHeight = document.querySelector('.doc-summary .overview').offsetHeight;
  const profileElement = document.querySelector('.doc-summary .profile');
  profileElement.style.marginTop = `${overviewHeight / 2}px`;
  profileElement.style.marginLeft = `${overviewHeight / 2}px`;
});

document.addEventListener('resize', function () {
  const overviewHeight = document.querySelector('.doc-summary .overview').offsetHeight;
  const profileElement = document.querySelector('.doc-summary .profile');
  profileElement.style.marginTop = `${overviewHeight / 2}px`;
  profileElement.style.marginLeft = `${overviewHeight / 2}px`;
});