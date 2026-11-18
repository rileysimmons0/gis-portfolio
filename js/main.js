/*
  Shared website JavaScript
  -------------------------
  Used by the homepage and both MS4 project pages.
  Handles the copyright year and the mobile navigation menu.
*/

// Show the current year in the footer automatically.
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Open and close the navigation menu on small screens.
const menuButton = document.querySelector(".toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after the visitor chooses a section.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
