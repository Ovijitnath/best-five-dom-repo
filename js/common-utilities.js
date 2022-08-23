
// All Common Functions are here
function isValid(inputValue) {
    if (isNaN(inputValue)) {
        alert('Enter a Number!');
        return 0;
    }
    else if (inputValue < 0) {
        alert('Enter a positive number!');
        return 0;
    }
    else {
        return inputValue;
    }
}
function getInputValueById(inputId) {
    const getInputFieldId = document.getElementById(inputId);
    const getInputFieldString = getInputFieldId.value;
    const getInputFieldNumber = parseFloat(getInputFieldString);
    return isValid(getInputFieldNumber);
}
function getTextElementValueById(elementId) {
    const getTextElementId = document.getElementById(elementId);
    const getTextElementString = getTextElementId.innerText;
    const getTextElement = parseFloat(getTextElementString);
    return isValid(getTextElement);
}

function setTextElementValue(elementId, newAssignedValue) {
    const getTextElementId = document.getElementById(elementId);
    getTextElementId.innerText = newAssignedValue;
}
function disableButton(button) {
    document.getElementById(button.id).disabled = true;
}

