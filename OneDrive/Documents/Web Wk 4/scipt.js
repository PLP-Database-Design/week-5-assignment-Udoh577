function validateRegistration() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 100.';
        isValid = false;
    }

    // Validate Terms
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must accept the terms.';
        isValid = false;
    }

    return isValid; // Prevent form submission if not valid
}

function validateLogin() {
    // Similar validation logic for login form can be added here
    return true; // For now, assume valid
}
