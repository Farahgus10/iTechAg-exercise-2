'use strict'

const dataArray = [];

function handleSubmitButton() {
    const stringInput = document.getElementById("string-input").value
    
    if (stringInput.length != 0) {
        dataArray.push(stringInput)
    }

    document.getElementById("string-form").reset()
}

function clearArray() {
    dataArray.splice(0, dataArray.length)
}

function displayString() {
    document.getElementById("array-data").append(dataArray)

    clearArray();
}