let startBtn = document.getElementById('start');
let startPage = document.getElementById('firstPage');
let promptPageEl = document.getElementById('prompt-page');
console.log(promptPageEl);
function criteria() {
    console.log('criteria function');
    let getInputElValue = parseInt(
        document.getElementById('lengthValue').value
    );
    console.log(getInputElValue);
    if (isNaN(getInputElValue)) {
        alert('Please type Number!!');
        document.getElementById('lengthValue').value = '';
    } else if (getInputElValue < 8 || getInputElValue > 128) {
        alert('Please type a number between 8 - 128');
        document.getElementById('lengthValue').value = '';
    } else {
        console.log('False');
    }
}
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
    submitLengthButton.addEventListener('click', criteria);
    box.appendChild(submitLengthButton);
    promptPageEl.appendChild(box);
}
function begin() {
    //hide the first page
    startPage.classList.add('hide');
    askForLength();
}

startBtn.addEventListener('click', begin);
