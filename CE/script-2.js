// Show program details when clicked
function showProgramDetails(programId) {
    const details = document.getElementById(programId);
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Form Validation and Submission (Assuming backend integration with Java for form processing)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for contacting us! We will get back to you shortly.');

    // Here, you would typically use fetch to send this data to your Java backend
    // fetch('/submitForm', {
    //     method: 'POST',
    //     body: JSON.stringify({ name, email, message }),
    //     headers: { 'Content-Type': 'application/json' }
    // });
});
