const white = "#ffffff";
const dark = "#1f0033";
const menServiceSrc = "assets/index/services/services-men.svg";
const womenServiceSrc = "assets/index/services/services-women.svg";
const menServiceWhiteSrc = "assets/index/services/services-men-white.svg";
const womenServiceWhiteSrc = "assets/index/services/services-women-white.svg";
const darkModeIcon = "assets/dark-mode.svg"
const lightModeIcon = "assets/light-mode.svg"

let currentMode;
const userPreferredMode = (() => {
  const lightMatches = matchMedia("(prefers-color-scheme: light)");
  if (lightMatches) currentMode = "light";
  else currentMode = "dark";
})();

window.addEventListener("load", () => {
  const toggleMode = document.getElementById("toggle-mode");
  const toggleModeIcon = document.getElementById("toggle-mode-icon");
  const root = document.querySelector(":root");
  toggleModeIcon.src = currentMode === "dark" ? lightModeIcon : darkModeIcon;
  toggleMode.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light";
    root.style.setProperty(
      "--secondary-main-4",
      currentMode === "dark" ? white : dark
    );
    root.style.setProperty(
      "--text-color",
      currentMode === "dark" ? dark : white
    );
    document.getElementById("men-service").src =
      currentMode === "dark" ? menServiceWhiteSrc : menServiceSrc;
    document.getElementById("women-service").src =
      currentMode === "dark" ? womenServiceWhiteSrc : womenServiceSrc;
    toggleModeIcon.src = currentMode === "dark" ? lightModeIcon : darkModeIcon;
  });
});
