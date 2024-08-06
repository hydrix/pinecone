const inputFR = document.querySelector('#inpud-1');
const inputSC = document.querySelector('#inpud-2');
let answer = document.querySelector('#result');

const minusBtn = document.querySelector("#MinusBtn");
const plusBtn = document.querySelector("#PlusBtn");
const multiBtn = document.querySelector("#MultiplyBtn");
const divideBtn = document.querySelector("#DivideBtn");
const clearBtn = document.querySelector("#ClearBtn");

minusBtn.addEventListener("click", () => {
    answer.value = parseFloat(inputFR.value) - parseFloat(inputSC.value);  
});

plusBtn.addEventListener("click", () => {
    answer.value = parseFloat(inputFR.value) + parseFloat(inputSC.value);
});

multiBtn.addEventListener("click", () => {
    answer.value = parseFloat(inputFR.value) * parseFloat(inputSC.value);
});

divideBtn.addEventListener("click", () => {
    if (parseFloat(inputSC.value) !== 0) {
        answer.value = parseFloat(inputFR.value) / parseFloat(inputSC.value);
    } else {
        answer.value = 'Error';
    }
});

clearBtn.addEventListener("click", () => {
    inputFR.value = '';
    inputSC.value = '';
    answer.value = '';
});