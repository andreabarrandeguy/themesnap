// Select the elements
const followersButton = document.getElementById('followers');
const followingButton = document.getElementById('following');
const bmkOthersDiv = document.getElementById('bmkOthers');
const popup = document.getElementById('popup');

// Function to display different messages
function showMessage(message) {
    popup.innerHTML = message;
    popup.style.display = 'block';
    // Add event listener to hide the popup when clicking outside
    setTimeout(() => {
        document.addEventListener('touchstart', hidePopup);
    }, 300); // 300 milliseconds delay, adjust as needed
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
    document.removeEventListener('touchstart', hidePopup);
}

// Event listeners for each element
followersButton.addEventListener('touchstart', () => {
    showMessage('Soon other users will be able to follow you');
});

followingButton.addEventListener('touchstart', () => {
    showMessage('Soon you will be able to follow other users');
});

bmkOthersDiv.addEventListener('touchstart', () => {
    const message = `
        <p>This is the total times your photos</p>
        <p>were saved by others.</p>
        <br>
        <p>Soon you will be able to see</p>
        <p>your most saved photos!</p>
    `;
    showMessage(message);
});
