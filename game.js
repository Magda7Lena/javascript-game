let symbols;
symbols = [
    {name: "donut", img: "img/donut.png",},
    {name: "donut", img: "img/donut.png",},
    {name: "donut", img: "img/donut.png",},
    {name: "donut", img: "img/donut.png",},
    {name: "flamingo", img: "img/flamingo.png",},
    {name: "flamingo", img: "img/flamingo.png",},
    {name: "flamingo", img: "img/flamingo.png",},
    {name: "flamingo", img: "img/flamingo.png",},
    {name: "cactus", img: "img/cactus.png",},
    {name: "cactus", img: "img/cactus.png",},
    {name: "cactus", img: "img/cactus.png",},
    {name: "cactus", img: "img/cactus.png",},
    {name: "emot", img: "img/emot.png",},
    {name: "emot", img: "img/emot.png",},
    {name: "emot", img: "img/emot.png",},
    {name: "emot", img: "img/emot.png",}
];

const board = document.getElementById("board");


function initBoard() {
    displayEmptySlots(4, 4);
    displaySymbols(symbols);
}

function displayEmptySlots(rows, cols) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for (let b = 0; b < (rows * cols); b++) {
        let slot = document.createElement('div');
        slot.setAttribute('class', 'slot');
        slot.setAttribute('data_id', b);
        board.appendChild(slot).className = "slot";
    }
}

function displaySymbols(symbols) {
    let len = symbols.length;
    for (i = 0; i < len ; i++){
        let img = document.createElement("img");
        let source = symbols[i].img;
        img.setAttribute('src', source);
        let parent = document.querySelector(".symbols");
        parent.appendChild(img);
    }
}

function initGame() {
    initBoard();
}

initGame();
