const DOMSelectors = {
    description: document.querySelectorAll(".description"),
    grade: document.querySelectorAll(".grade"),
    weight: document.querySelectorAll(".weight"),
    calculate: document.getElementById("calculate"),
    clear: document.getElementById("clear"),
    weightedAvg: document.getElementById("weightedAvg"),
    letterGrade: document.getElementById("letterGrade"),
    inputs: document.getElementsByTagName ("td") 
}

export { DOMSelectors };