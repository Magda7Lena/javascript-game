
let symbols =
        [{name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "flamingo", img: "../static/images/7-flamingo.png",},
    {name: "flamingo", img: "../static/images/7-flamingo.png",},
    {name: "flamingo", img: "../static/images/7-flamingo.png",},
    {name: "flamingo", img: "../static/images/7-flamingo.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "surf", img: "../static/images/6-surf.png",},
    {name: "surf", img: "../static/images/6-surf.png",},
    {name: "surf", img: "../static/images/6-surf.png",},
    {name: "surf", img: "../static/images/6-surf.png"}];

const board = document.getElementById("board");


function displayEmptySlots(rows, cols) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for (let slotId = 0; slotId < (rows * cols); slotId++) {
        let slot = document.createElement('div');
        slot.setAttribute('class', 'slot');
        slot.setAttribute('id', slotId);
        board.appendChild(slot).className = "slot";
    }
}

function displaySymbols(symbols) {
    let len = symbols.length;
    for (let i = 0; i < len ; i++){
        let img = document.createElement("img");
        let source = symbols[i].img;
        img.setAttribute('src', source);
        let parent = document.querySelector(".symbols");
        parent.appendChild(img);
    }
}

function initBoard() {
    displayEmptySlots(4, 4);
    displaySymbols(symbols);}


function initGame() {
    initBoard();
}

initGame();
