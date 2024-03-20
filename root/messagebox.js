// Attach event listeners when the document is ready
$(document).ready(function() {
    // Event listener for the "Buy us a Coffee" button
    $('#buyCoffeeBtn').on('click', function() {
        // Call the function to handle "Buy us a Coffee" action
        handleBuyCoffee();
    });

    // Event listener for the "Another Time" button
    $('#anotherTimeBtn').on('click', function() {
        // Call the function to handle "Another Time" action
        handleAnotherTime();
    });

    // Event listener for the close button (assuming it has a class 'close')
    $('.close').on('click', function() {
        // Close the modal
        closeModal();
    });
});

// Function to handle "Buy us a Coffee" action
function handleBuyCoffee() {
    // Add your logic here
    // For example, redirect to the Buy Me a Coffee page
    window.open('https://www.buymeacoffee.com/infosoftyly', '_blank');
    // Close the modal (optional)
    closeModal();
}

// Function to handle "Another Time" action
function handleAnotherTime() {
    // Add your logic here
    // For example, continue with the dream interpretation
    // Close the modal (optional)
    closeModal();
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
