window.alert("Welcome to My Portfolio!This website is best viewed on a desktop for optimal layout and functionality.(Desktop Site)");
// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  alert(`Thanks for reaching out, ${name}! I will get back to you soon.`);
  this.reset();
});
