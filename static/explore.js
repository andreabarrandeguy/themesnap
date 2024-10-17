// JavaScript for handling the pop-up functionality with touch events
document.addEventListener('DOMContentLoaded', () => {
    const snapThemeIcon = document.getElementById('snapTheme');
    const explorePopup = document.getElementById('explorePopup');
    const explorePopupText = document.querySelector('.explorePopup_text');

    // Function to show the pop-up
    function showPopup() {
        explorePopup.style.display = 'block';
    }

    // Function to hide the pop-up
    function hidePopup() {
        explorePopup.style.display = 'none';
    }

    // Event listener to show the pop-up when the icon is tapped
    snapThemeIcon.addEventListener('touchstart', showPopup);

    // Event listener to close the pop-up when tapping outside of "explorePopup_text"
    document.addEventListener('touchstart', (event) => {
        if (explorePopup.style.display === 'block' && !explorePopupText.contains(event.target) && event.target !== snapThemeIcon) {
            hidePopup();
        }
    });
});
