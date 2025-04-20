/**
 * TidsRejsen - Main JavaScript
 * 2025 Update
 */

document.addEventListener('DOMContentLoaded', function() {
  // Force HTTPS (backup for HTML redirect)
  if (window.location.protocol !== 'https:' && 
      window.location.hostname !== 'localhost' && 
      window.location.hostname !== '127.0.0.1') {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
  
  // Initialize any interactive elements
  initializeUI();
});

function initializeUI() {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

function copyIP() {
  const ip = "mc.tidsrejsen.net";
  
  if (navigator.clipboard && window.isSecureContext) {
    // For modern browsers
    navigator.clipboard.writeText(ip).then(() => {
      showPopup();
    });
  } else {
    // Fallback for older browsers
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = ip;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showPopup();
  }
}

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}
