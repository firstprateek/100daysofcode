document.querySelector(".theme-toggle-button").addEventListener("click", (event) => {
  document.body.classList.toggle("dark");
  const sunMoonContainer = document.querySelector('.sun-moon-container');
  let rotation = Number.parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
  sunMoonContainer.style.setProperty('--rotation', (rotation + 180));
})