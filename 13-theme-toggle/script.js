const themeBtn = document.getElementById("themeBtn");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
document.body.className = savedTheme;

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.className = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  }
});
