function showPopUp() {
    alert("Thanks for Signing up,will get to you shortly.");
  }


  // Get the form element by ID
var form = document.getElementById('myForm');

// Add an event listener for when the form is submitted
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Display a pop-up message thanking the user for submitting the form
  alert('Thanks for submitting,will get to you shortly!');
  
  // Submit the form programmatically
  form.submit();
});

  