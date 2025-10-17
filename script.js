// Typewriter intro
document.addEventListener("DOMContentLoaded", function() {
  new Typed("#typed-text", {
    strings: [
      "I’m Amrutha — Web Developer 💻",
      "AI Enthusiast 🤖",
      "Creative Storyteller 🎨",
      "Tech Explorer 🌱"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1500,
    loop: true
  });
});

// Section switching
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Photo upload preview
const photoInput = document.getElementById('photo-upload');
const photoDisplay = document.getElementById('profile-photo');
photoInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      photoDisplay.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
