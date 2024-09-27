document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactMethod = document.getElementById("contactMethod").value;
    const terms = document.getElementById("terms").checked;

    // Data Validation
    let emailError = '';
    if (!validateEmail(email)) {
        emailError = 'Invalid email format.';
        document.getElementById("emailError").textContent = emailError;
        return; // Exit if validation fails
    } else {
        document.getElementById("emailError").textContent = '';
    }

    if (!terms) {
        alert('You must accept the terms and conditions.');
        return;
    }

    // Data Processing
    const formData = {
        name: name,
        email: email,
        contactMethod: contactMethod,
        termsAccepted: terms
    };

    // Display data
    displayFormSummary(formData);
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Display form summary
function displayFormSummary(data) {
    const summaryDiv = document.getElementById("formSummary");
    summaryDiv.innerHTML = `
        <h2>Form Summary</h2>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Preferred Contact Method: ${data.contactMethod}</p>
        <p>Terms Accepted: ${data.termsAccepted ? "Yes" : "No"}</p>
    `;
}
