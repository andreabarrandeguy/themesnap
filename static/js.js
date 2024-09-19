// Dark mode
const modeToggle = document.getElementById('toggle');
const body = document.body;

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark-mode') {
        body.classList.add('dark-mode');
        modeToggle.checked = true; // Set toggle to dark mode
    } else {
        body.classList.remove('dark-mode');
        modeToggle.checked = false; // Set toggle to light mode
    }
}

// Function to toggle the theme
function toggleDarkMode() {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Save to localStorage
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save to localStorage
    }
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // If no saved theme, use the system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDarkMode ? 'dark-mode' : 'light-mode');
    }
}

// Add event listener to toggle switch
modeToggle.addEventListener('click', toggleDarkMode);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);

// Password toggle
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute of the password input
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon
        if (type === 'password') {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        } else {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
    });
});

//Photo submission
document.getElementById('upload').addEventListener('change', function () {
    // Check if a file was selected
    if (this.files.length > 0) {
        // Redirect to home.html without submitting
        window.location.href = 'home.html'; // Change as needed
    }
});

//Photo saved
document.querySelectorAll('.bookmark-toggle').forEach(toggle => {
    toggle.addEventListener('change', function () {
        if (this.checked) {
            const popup = document.getElementById('popup');
            popup.style.display = 'block'; // Show the popup
            popup.style.opacity = '1'; // Ensure it's visible
            setTimeout(() => {
                popup.style.opacity = '0'; // Fade out
                setTimeout(() => {
                    popup.style.display = 'none'; // Hide it after fade out
                }, 500); // Match this time to the CSS transition
            }, 3000); // Keep it visible for 3 seconds
        }
    });
});