document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Thanks for contacting us! We'll get back to you soon.";
  this.reset();
});