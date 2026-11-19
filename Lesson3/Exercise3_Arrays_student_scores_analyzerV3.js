//activity 3

'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Keep the students' names and final grades in separate arrays.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Record three activity grades for each student in the original list.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Make a separate copy of the original student names.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// Loop through the arrays to print each student's information.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

// Place Faith and her score at the end of the arrays.
studentNames.push('Faith');
studentScores.push(88);

// Put Aaron and his score at the start of the arrays.
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Print the modified arrays and count the students.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Delete the name and score at the beginning.
studentNames.shift();
studentScores.shift();

// Delete the name and score at the end.
studentNames.pop();
studentScores.pop();

// Get the position of Daniel in the names array.
const danielIndex = studentNames.indexOf('Daniel');

// Remove Daniel's information from both arrays.
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Add Grace and her score at position 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Print the resulting names and scores.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

// Add all the scores together to get the total.
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

// Get the mean score by dividing the total by the number of students.
const averageScore = totalScore / studentScores.length;

// Start with the first score and look for a larger value.
let highestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
}

// Start with the first score and look for a smaller value.
let lowestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

// Show the total, average, maximum, and minimum scores.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

// Collect the grades that meet the passing requirement.
const passingScores = studentScores.filter(score => score >= passingScore);

// Assign a passing or failing result to each score.
const statuses = studentScores.map(score => (score >= passingScore ? 'Passed' : 'Failed'));

// Determine if the list contains any grade below 75.
const atLeastOneFailed = studentScores.some(score => score < passingScore);

// Verify whether every student meets the passing mark.
const allStudentsPassed = studentScores.every(score => score >= passingScore);

// Print the passing grades and the results of the checks.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

console.log('\nPART F: SORT AND SEARCH');

// Create another array so the original scores remain unchanged.
const sortedScores = Array.from(studentScores);

// Arrange the copied scores in descending order.
sortedScores.sort((a, b) => b - a);

// Check if 91 exists and find its position in the sorted array.
const contains91 = sortedScores.includes(91);
const indexOf91 = sortedScores.indexOf(91);

// Print the sorted grades and search results.
console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Go through each student's row and each activity column.
for (let row = 0; row < activityScores.length; row++) {
  let rowTotal = 0;
  for (let col = 0; col < activityScores[row].length; col++) {
    console.log(activityScores[row][col]);
    rowTotal += activityScores[row][col];
  }

  // Find the average of the activities and save the result.
  const rowAverage = rowTotal / activityScores[row].length;
  activityAverages.push(rowAverage);
  console.log(`${originalNames[row]}'s activity average: ${rowAverage.toFixed(2)}`);
}

// Print the averages calculated for the original students.
console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

// Combine the student names into one string with separators.
console.log('Students:', studentNames.join(' | '));
