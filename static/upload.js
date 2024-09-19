//Photo submission
document.getElementById('upload').addEventListener('change', function () {
    // Check if a file was selected
    if (this.files.length > 0) {
        // Redirect to home.html without submitting
        window.location.href = 'home.html'; // Change as needed
    }
});