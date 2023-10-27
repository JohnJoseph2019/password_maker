let startBtn = document.getElementById('start');
let startPage = document.getElementById('firstPage');
let promptPageEl = document.getElementById('prompt-page');
console.log(promptPageEl);

function askForLength() {
    let box = document.createElement('div');
    box.classList.add('lengthSection');
    let questionEL = document.createElement('h2');
    questionEL.textContent = 'What is the length of you password ?';
    box.appendChild(questionEL);
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', '4');
    inputElement.setAttribute('id', 'lengthValue');
    inputElement.classList.add('inputEl');
    box.appendChild(inputElement);
    let submitLengthButton = document.createElement('button');
    submitLengthButton.textContent = 'Enter';
    box.appendChild(submitLengthButton);
    promptPageEl.appendChild(box);
}
function begin() {
    //hide the first page
    startPage.classList.add('hide');
    askForLength();
}

startBtn.addEventListener('click', begin);
