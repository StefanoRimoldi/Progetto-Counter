// Toggle
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleNightMode").addEventListener("click", function() {
    const body = document.body;
    
    if (body.classList.contains("night-mode")) {
      body.classList.remove("night-mode");
    } else {
      body.classList.add("night-mode");
    }
  });
  
  // Per cambiare icona al click
  const toggleNightModeButton = document.getElementById("toggleNightMode");
  const toggleIcon = document.getElementById("toggleIcon");
  let isNightMode = false;
  
  toggleNightModeButton.addEventListener("click", function() {
    isNightMode = !isNightMode;
    if (isNightMode) {
      toggleIcon.src = "https://api.iconify.design/ph/moon-fill.svg?color=white"; // Inserisci l'URL dell'icona della luna
      
    } else {
      toggleIcon.src = "https://api.iconify.design/akar-icons/sun-fill.svg?color=white";
      // Link icone
      // https://api.iconify.design/ph/moon-fill.svg
      // https://api.iconify.design/akar-icons/sun-fill.svg?color=white
    }

  
document.addEventListener("DOMContentLoaded", function() {
    const toggleNightModeButton = document.getElementById("toggleNightMode");
    const toggleIcon = document.getElementById("toggleIcon");
  
    let isNightMode = localStorage.getItem("nightMode") === "true";
    
    if (isNightMode) {
      toggleIcon.src = "https://api.iconify.design/ph/moon-fill.svg?color=white";
    } else {
      toggleIcon.src = "https://api.iconify.design/akar-icons/sun-fill.svg?color=white";
    }
  });
  
  })
});