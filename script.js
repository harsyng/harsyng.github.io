document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Store email in localStorage for retrieval on the last page
  localStorage.setItem('email', email);

  // Redirect to another page
  window.location.href = 'hello.html';
});
// Retrieve email from localStorage
var email = localStorage.getItem('email');

// Display username on the page
document.getElementById('username').textContent = email;
