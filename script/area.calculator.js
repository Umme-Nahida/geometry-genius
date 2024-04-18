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

}


// reuaseble function to reduce dublicate code 
function getInputValue(fildId){
    const fieldElement = document.getElementById(fildId);
    const inputValueText = fieldElement.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}