// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('roomType').value;

    // Validate form inputs
    if (!name || !email || !checkIn || !checkOut || !guests || !roomType) {
        alert('Please fill in all fields.');
        return;
    }

    // Process the form data (You can send the data to the server for further processing)

    // Display confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `
        <h2>Booking Confirmation</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Check-in Date: ${checkIn}</p>
        <p>Check-out Date: ${checkOut}</p>
        <p>Number of Guests: ${guests}</p>
        <p>Room Type: ${roomType}</p>
        <p>Thank you for your booking!</p>
    `;
}

// Attach event listener to the form on submit
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', handleFormSubmit);