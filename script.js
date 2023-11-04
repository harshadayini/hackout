document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'user@example.com' && password === 'password123') {
        window.location.href = 'welcome.html';  // Redirects to the welcome page
    } else {
        document.getElementById('error').innerText = 'Invalid email or password';
    }
});
