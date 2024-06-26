function calculateTriangle(){
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    baseField.value ="";
    
    // height field
    const heightField = document.getElementById("triangle-height");
    const heightValue = heightField.value;
    const height = parseFloat(heightValue)
    heightField.value ="";
    
    const area = 0.5 * base * height;
    console.log(area)
    // get triangle area
    const triangleArea = document.getElementById("triangle-area");
    triangleArea.innerText = area; 
    addToCalculationEntry("TrianleArea",area);
}

// Ractangle area
function calculateRactangle(){
    // get input value from width field
    const widthField = document.getElementById("ractangle-width");
    const widthFieldValueString = widthField.value;
    const widthFieldValue = parseFloat(widthFieldValueString);

    // get input value from length field
    const lengthField = document.getElementById("ractangle-length");
    const lengthFieldValue = lengthField.value;
    const length = parseFloat(lengthFieldValue);

    const ractangleArea = widthFieldValue * length;

    // set value to the ractangle area 
    const ractangleElement = document.getElementById("ractangle-area");
    ractangleElement.innerText = ractangleArea;
    addToCalculationEntry("Ractangle",ractangleArea);

}

function parallelogramCalculate(){
    const paralleloBase = getInputValue("parallelo-base");
    const paralleloHeight = getInputValue("parallelo-height");
    const area = paralleloBase * paralleloHeight;
    // set parallelogram inner text or value
    setElementValueById("parallelogram-area",area);
    addToCalculationEntry("parallelogram",area);
}

// ------------rhombus area calculate
function RhombusCalculate(){
    const diagonalD1 = getInputValue("diagonal-d1");
    const diagonalD2 = getInputValue("diagonal-d2");
    const area = 0.5 * diagonalD1 * diagonalD2;
    const areaToDecimal = area.toFixed(2)

    setElementValueById("Rhombus-area",areaToDecimal);
    addToCalculationEntry("Rhombus",areaToDecimal);
}

// ------------pentagon area calculate
function PentagonCalculate(){
    const p = getInputValue("pentagon-p");
    const b = getInputValue("pentagon-b");

    const area = 0.5 * p * b;
    const areaToDecimal = area.toFixed(2);
    setElementValueById("Pentagon-area", areaToDecimal);
    addToCalculationEntry("Pentagon", areaToDecimal);
}

// // ------------ellepse area calculation
function ellipseCalculate(){
    const a = getInputValue("ellipse-a");
    const b = getInputValue("ellipse-b");
    const area = 3.14 * a * b;
    const areaToDecimal = area.toFixed(2);
    setElementValueById("ellipse-area", areaToDecimal);
    addToCalculationEntry("Ellepse",areaToDecimal)

}
// reuaseble function to reduce dublicate code 
function getInputValue(fildId){
    const fieldElement = document.getElementById(fildId);
    const inputValueText = fieldElement.value;
    const inputValue = parseFloat(inputValueText);
    fieldElement.value ="";
    return inputValue;
}

function setElementValueById(inputId,newValue){
    const inputArea = document.getElementById(inputId);
    inputArea.innerText = newValue;
}

function addToCalculationEntry(areaType,area){
    console.log(areaType + " " + area);
    const addEntryElement =document.getElementById("calculationEntry");
    const count = addEntryElement.childElementCount;
    console.log(count);
    const p = document.createElement("p");
    p.classList.add("my-2");
    p.innerHTML = ` ${count + 1}. ${areaType}  ${area}<span>cm<sup>2</sup></span>  <button class="btn btn-primary btn-sm">Convert to m<sup>2</sup></button> `;
    addEntryElement.appendChild(p);

}