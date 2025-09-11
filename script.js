// For more info on JavaScript, check out https://www.w3schools.com/js/

// init constants to get current time
const now = new Date(); // gets current date and time
const hour = now.getHours(); // extract just the hour from the datetime

let greetingText = ""; // variable to hold greeting message (currently empty)
if (hour < 12) {
  // if it is morning (before 12:00 PM)
  greetingText = "Good morning,"; // set greetingText variable
} else if (hour < 18) {
  greetingText = "Good afternoon,";
} else {
  greetingText = "Good evening,";
}

// update the "greeting" span in the HTML with the greetingText variable
document.getElementById("greeting").textContent = greetingText;
