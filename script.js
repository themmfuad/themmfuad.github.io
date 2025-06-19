const nav = document.getElementById("nav-links");
const toggleMenu = document.getElementById("toggle-menu");
const modeToggle = document.getElementById("mode-toggle");

// Toggle mobile menu
toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Persist dark/light mode
const isDark = localStorage.getItem("theme") === "dark";
if (isDark) document.body.classList.add("dark");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
