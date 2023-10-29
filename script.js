let cont = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        cont.appendChild(div);
    }
}

let divs = document.querySelectorAll('.grid-item');
divs.forEach((div) => div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'red';
}));

const size = document.querySelector('.size');

function askSize() {
    let answer = prompt('What size of the grid do you want?');

    if (answer > 100) {
        alert(`Size of the grid can't be more than 100`);
    } else {
        return answer;
    }
}

size.addEventListener('click', () => {
    let userSize;
    userSize = askSize();

    let oldDivs = document.querySelectorAll('.grid-item');
    oldDivs.forEach((div) => cont.removeChild(div));

    for (let i = 0; i < userSize; i++) {
        for (let j = 0; j < userSize; j++) {
            let div = document.createElement('div');
            div.className = 'grid-item';
            cont.appendChild(div);
        }
    }

    let divs = document.querySelectorAll('.grid-item');
divs.forEach((div) => div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'red';
}));

});