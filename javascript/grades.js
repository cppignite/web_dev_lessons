/**
 * This program displays the student's test grade based
 * on their test score.
 */

var grade = prompt("What is your score (out of 100)?");

if (grade >= 90) {
  alert("You got an A!");
} else if (grade < 90 && grade >= 80) {
  alert("You got a B!");
} else if (grade < 80 && grade >= 70) {
  alert("You got a C!");
} else if (grade < 70 && grade >= 60) {
  alert("You got a D!");
} else {
  alert("You got an F!");
}

if (grade > 90) {
  alert("You got an A!");
} else if (grade > 80) {
  alert("You got a B!");
} else if (grade > 70) {
  alert("You got a C!");
} else if (grade > 60) {
  alert("You got a D!");
} else {
  alert("You got an F!");
}

