// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!





// we are going to need to average the test scores
// going to use the .reduce() method to sum up the array
// use a arrow function "(a, b) => a + b" to add each element
// use ,0 to initialize the sum to 0
// use / classPoints.length this divides the sum by the number of elements in the array
// that gives us our average
// then compare their average to our score
// then return true or false depending on the outcome
function betterThanAverage(classPoints, yourPoints){
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}