import "/styles/style.css";
import { DOMSelectors } from "./DOMSelectors";

//function used to clear user inputs
function clear(){
    DOMSelectors.description.value = "";
    DOMSelectors.grade.value = "";
    DOMSelectors.weight.value = "";
}

//when the clear button is pressed, the user inputs are cleared
DOMSelectors.clear.addEventListener("click", function () {
clear();
});

//takes the user's input for weight and divides it by 100 to obtain percent decimal
DOMSelectors.calculate.addEventListener("click", function () {
let weight = DOMSelectors.weight.value;
let newWeight = weight / 100;
console.log(newWeight);
});





//push to array 

DOMSelectors.calculate.addEventListener("click", pushData);

function pushData() {
    const grades = [];
    const data = {
      description: DOMSelectors.description.value,
      grade: DOMSelectors.grade.value,
      weight: DOMSelectors.weight.value
    }
    grades.push(data);
    //document.getElementById('display').innerText += JSON.stringify(data, null, 2) + ',';
  }

const grades = DOMSelectors.grade.value;
const totalValues = grades.length; //finds out the total number of items in the "grades" array
console.log(totalValues);

//multiply the grade to the weight 
//add all sums together
//find number of total arrays