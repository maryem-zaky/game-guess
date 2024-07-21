document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const resultDiv = document.getElementById('result');
    
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    guessForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get user inputs
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const guessNumber = parseInt(document.getElementById('guessNumber').value);
      
      // Validate the guess number
      if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
        resultDiv.textContent = "Please enter a valid number between 1 and 100.";
        return;
      }
      
      // Compare the guess with the random number
      if (guessNumber === randomNumber) {
        resultDiv.textContent = `${firstName} ${lastName}, you guessed the correct number! 🎉`;
        // Display an image of a gun punching (optional)
        // You can use CSS to show/hide an image or animate it.
      } else {
        resultDiv.textContent = `Sorry, ${firstName} ${lastName}, the correct number was ${randomNumber}.`;
      }
    });
  });
  