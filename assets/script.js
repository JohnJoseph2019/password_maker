let startBtn = document.getElementById('start');
let startPage = document.getElementById('firstPage');
console.log(startBtn);

function begin() {
    //hide the first page
    startPage.classList.add('hide');
}

startBtn.addEventListener('click', begin);
