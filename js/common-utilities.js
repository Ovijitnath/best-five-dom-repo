function getInputValueById(inputId) {
    const getInputFieldId = document.getElementById(inputId);
    const getInputFieldString = getInputFieldId.value;
    const getInputFieldNumber = parseInt(getInputFieldString);
    return getInputFieldNumber;
}
function getTextElementValueById(elementId) {
    const getTextElementId = document.getElementById(elementId);
    const getTextElementString = getTextElementId.value;
    const getTextElement = parseInt(getTextElementString);
    return getTextElement;
}

function setTextElementValue(elementId, newValue) {
    const getTextElementId = document.getElementById(elementId);
    getTextElementId.innerText = newValue;
}