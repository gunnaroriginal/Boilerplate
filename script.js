// RANDOM NUMBER GENERATOR
function getRandomInteger(max) {
  return Math.floor(Math.random() * max + 1);
}

console.log(getRandomInteger(20));

// CMD TEXT LOADER
document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text");
  const originalTextContent = text.textContent.trim();
  let currentIndex = 0;
});

function openGitHub() {
  window.open("https://github.com/gunnaroriginal");
}

// CALCULATE DATE
let date1 = new Date(Date());
let date2 = new Date("03/21/2025");

// Calculating the time difference
// of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();

// Calculating the no. of days between
// two dates
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

// To display the final no. of days (result)
console.log(
  "Total number of days between dates:\n" +
    date1.toDateString() +
    " and " +
    date2.toDateString() +
    " is: " +
    Difference_In_Days +
    " days"
);

document.getElementById("techcollegeDaysLeft").innerHTML =
  "Days left at TECHCOLLEGE: \n" +
  // date1.toDateString() +
  // " and " +
  // date2.toDateString() +
  // " is: " +
  Difference_In_Days +
  " days";
