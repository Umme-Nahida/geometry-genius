function calculateTriangle(){
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    
    // height field
    const heightField = document.getElementById("triangle-height");
    const heightValue = heightField.value;
    const height = parseFloat(heightValue)
    console.log(base, height)
}