let startBtn = document.getElementById('start');
let startPage = document.getElementById('firstPage');
let promptPageEl = document.getElementById('prompt-page');
let finalPage = document.getElementById('final-Page');
let passwordEl = document.getElementById('password');
let getInputElValue;
let criteriaIndex = 0;
let charactersList = {
    UPPERCASE: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
    LOWERCASE: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ],
    NUMBERS: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    SPECIALCHARACTERS: [
        '@',
        '%',
        '+',
        '\\',
        '/',
        "'",
        '!',
        '#',
        '$',
        '^',
        '?',
        ':',
        ',',
        ')',
        '(',
        '}',
        '{',
        ']',
        '[',
        '~',
        '-',
        '_',
        '.',
    ],
};

let criteriaList = [
    {
        q: 'Do you want to have UPPERCASE Letters in your password ?',
        id: 'UPPERCASE',
    },
    {
        q: 'Do you want to have LOWERCASE Letters in your password ?',
        id: 'LOWERCASE',
    },
    {
        q: 'Do you want to have NUMBERS Letters in your password ?',
        id: 'NUMBERS',
    },
    {
        q: 'Do you want to have SPECIAL-CHARACTERS Letters in your password ?',
        id: 'SPECIALCHARACTERS',
    },
];
let acceptedList = [];
function generatePassword() {
    promptPageEl.innerHTML = '';
    promptPageEl.classList.add('hide');
    finalPage.classList.remove('hide');
    finalPage.classList.add('page');
}
function nextOption(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'YES') {
        console.log('YES I WANT');
        // console.log(charactersList[criteriaList[criteriaIndex].id]);
        acceptedList = acceptedList.concat(
            charactersList[criteriaList[criteriaIndex].id]
        );
    }
    console.log(acceptedList);
    if (criteriaIndex >= criteriaList.length - 1) {
        generatePassword();
    } else {
        criteriaIndex++;
        askCriteria();
    }
}
function askCriteria() {
    promptPageEl.innerHTML = '';
    promptPageEl.style.width = '750px';
    promptPageEl.style.height = 'fit-content';
    let criteriaQuestion = document.createElement('h2');
    criteriaQuestion.dataset.id = criteriaList[criteriaIndex].id;
    criteriaQuestion.textContent = criteriaList[criteriaIndex].q;
    promptPageEl.appendChild(criteriaQuestion);
    let yesButton = document.createElement('button');
    yesButton.textContent = 'YES';
    let noButton = document.createElement('button');
    noButton.textContent = 'NO';
    noButton.classList.add('btn');
    yesButton.classList.add('btn');
    promptPageEl.appendChild(yesButton);
    promptPageEl.appendChild(noButton);
    noButton.addEventListener('click', (e) => nextOption(e));
    yesButton.addEventListener('click', (e) => nextOption(e));
}

function askForLength() {
    // let box = document.createElement('div');
    promptPageEl.classList.add('lengthSection');
    let questionEL = document.createElement('h2');
    questionEL.textContent = 'What is the length of you password ?';
    promptPageEl.appendChild(questionEL);
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', '4');
    inputElement.setAttribute('id', 'lengthValue');
    inputElement.classList.add('inputEl');
    promptPageEl.appendChild(inputElement);
    let submitLengthButton = document.createElement('button');
    submitLengthButton.textContent = 'Enter';
    submitLengthButton.addEventListener('click', () => {
        getInputElValue = parseInt(
            document.getElementById('lengthValue').value
        );
        // console.log(getInputElValue);
        if (isNaN(getInputElValue)) {
            alert('Please type Number!!');
            document.getElementById('lengthValue').value = '';
        } else if (getInputElValue < 8 || getInputElValue > 128) {
            alert('Please type a number between 8 - 128');
            document.getElementById('lengthValue').value = '';
        } else {
            //Ask for criteria
            askCriteria();
        }
    });
    promptPageEl.appendChild(submitLengthButton);
    // promptPageEl.appendChild(box);
}
function begin() {
    //hide the first page
    startPage.classList.add('hide');
    criteriaIndex = 0;
    acceptedList = [];
    askForLength();
}

startBtn.addEventListener('click', begin);
