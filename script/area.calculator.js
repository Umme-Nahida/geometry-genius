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