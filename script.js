function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//Popup For in Development Projects
document.addEventListener("DOMContentLoaded", function() {
  // Function to show the popup
  function showPopup() {
    document.querySelector(".popup").style.display = "block";
    document.querySelector(".popup-overlay").style.display = "block";
  }

  // Function to hide the popup
  function hidePopup() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
  }

  // Add event listeners to the buttons
  document.getElementById("btn btn-color-2 project-btn").addEventListener("click", showPopup);

  // Add event listener to the overlay to hide the popup when clicked
  document.querySelector(".popup-overlay").addEventListener("click", hidePopup);
});
