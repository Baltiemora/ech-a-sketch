//Gloabl variables
const gridSize = document.querySelector('.btnSize');
let cont = document.querySelector('.container');

//Create default 16x16 grid after load the page

for (let i = 0; i < 16; i++) {
    let divContainer = document.createElement('div');
    divContainer.className = 'div-container';
    cont.appendChild(divContainer);
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        divContainer.appendChild(div);
    }
}

//Draw physics
let divs = document.querySelectorAll('.grid-item');
divs.forEach((div) => div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = '#202020';
}));

//Ask grid size
function askSize() {
    let answer = prompt('What size of the grid do you want?');

    if (answer > 100) {
        alert(`Size of the grid can't be more than 100`);
    } else {
        return answer;
    }
}

//Change grid size
gridSize.addEventListener('click', () => {
    let userSize;
    userSize = askSize();

    let oldRows= document.querySelectorAll('.div-container');
    oldRows.forEach((row) => cont.removeChild(row));

    for (let i = 0; i < userSize; i++) {
        let divContainer = document.createElement('div');
        divContainer.className = 'div-container';
        cont.appendChild(divContainer);
        for (let j = 0; j < userSize; j++) {
            let div = document.createElement('div');
            div.className = 'grid-item';
            divContainer.appendChild(div);
        }
    }

    let divs = document.querySelectorAll('.grid-item');
divs.forEach((div) => div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = '#202020';
}));

});
