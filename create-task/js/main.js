import "/styles/style.css";
import { DOMSelectors } from "./DOMSelectors";

//upon clicking the "calculate" button, the 'calculate' and 'letters' function is activated
DOMSelectors.calculate.addEventListener("click", function () {
  calculate();
  letters(weightedAvg);
});

//upon clicking the "clear" button, the 'clear' function is activated
DOMSelectors.clear.addEventListener("click", function () {
  clear();
});

let weightedAvg;
let userWeights = DOMSelectors.weight;
let userGrades = DOMSelectors.grade;
let descriptions = DOMSelectors.description;
let results = DOMSelectors.results;

function calculate() {
  //opens up arrays to house the weights and grades
  let weights = [];
  let grades = [];


  //takes the value of the user inputs and pushes it into the grade and weight arrays
  //parseFloat can handle fractional values, so parseInt is not used in this case
  for (let i = 0; i < userGrades.length; i++) {
    let userGrade = parseFloat(userGrades[i].value); //takes the user's grade and turns it into a floating point number
    let userWeight = parseFloat((userWeights[i].value) / 100); //divides the user's grade's weight by 100, then turns it into a floating point number
    //pushes floating point numbers of weights and grades into their respective arrays
    //accounts for non-numerical or empty inputs from the user by pushing in a value of 0
    if (isNaN(userGrade) || isNaN(userWeight)) {
      weights.push(0);
      grades.push(0);
    } else if (!isNaN(userGrade) || !isNaN(userWeight)) {
      weights.push(userWeight);
      grades.push(userGrade);
    }
  }
  //console logs the grade and weight arrays
  console.log("grades: ", (grades));
  console.log("weights: ", (weights));
  //calculate the weighted average
  let weightedSum = 0;
  let totalWeight = 0;
  for (let i = 0; i < grades.length; i++) {
    weightedSum += ((grades[i]) * (weights[i])); //for each grade in the array, multiply it by the respective weight in the "weights" array
    totalWeight += weights[i]; //sum of all values in the weights array
  }
  weightedAvg = ((weightedSum) / (totalWeight));
  if (isNaN(weightedAvg)) {
    DOMSelectors.weightedAvg.innerHTML = "Invalid Inputs";
  } else if (!isNaN(weightedAvg)) {
    //displays weighted average rounded to the hundredths place
    DOMSelectors.weightedAvg.innerHTML = weightedAvg.toFixed(2);
    console.log("weighted average: ", (weightedAvg));
  }
};



//assigns letter to numerical weighted average
function letters(weightedAvg) {
  let letterGrade = DOMSelectors.letterGrade;

  if (weightedAvg >= 97) {
    letterGrade.innerHTML = "A+";
  } else if (weightedAvg >= 93 && weightedAvg <= 96) {
    letterGrade.innerHTML = "A";
  } else if (weightedAvg >= 89 && weightedAvg <= 92) {
    letterGrade.innerHTML = "A-";
  } else if (weightedAvg >= 85 && weightedAvg <= 88) {
    letterGrade.innerHTML = "B+";
  } else if (weightedAvg >= 81 && weightedAvg <= 84) {
    letterGrade.innerHTML = "B";
  } else if (weightedAvg >= 77 && weightedAvg <= 80) {
    letterGrade.innerHTML = "B-";
  } else if (weightedAvg >= 73 && weightedAvg <= 76) {
    letterGrade.innerHTML = "C+";
  } else if (weightedAvg >= 69 && weightedAvg <= 72) {
    letterGrade.innerHTML = "C";
  } else if (weightedAvg >= 67 && weightedAvg <= 68) {
    letterGrade.innerHTML = "C-";
  } else if (weightedAvg == 66) {
    letterGrade.innerHTML = "D+";
  } else if (weightedAvg == 65) {
    letterGrade.innerHTML = "D";
  } else if (weightedAvg >= 0 && weightedAvg <= 65) {
    letterGrade.innerHTML = "F";
  }
};

//clears inputs and outputs
function clear() {
  userGrades.forEach((grade) => {
    grade.value = "";
  });
  userWeights.forEach((weight) => {
    weight.value = "";
  });
  descriptions.forEach((description) => {
    description.value = "";
  });
  results.forEach((result) => {
    result.innerHTML = "";
  });
};