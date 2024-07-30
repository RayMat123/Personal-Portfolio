function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  
  function showPopup() {
    document.querySelector(".popup").style.display = "block";
    document.querySelector(".popup-overlay").style.display = "block";
  }

  
  function hidePopup() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
  }

  
  document.getElementById("btn btn-color-2 project-btn").addEventListener("click", showPopup);

  
  document.querySelector(".popup-overlay").addEventListener("click", hidePopup);
});
