
let cards =
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


function enterUserName(){
    let parent = document.querySelector(".game-info");
    let user = document.getElementById("userName").value;
    let userDisplay = document.createElement('div');

    userDisplay.innerText = `player: ${user}`;
    parent.appendChild(userDisplay);
    let inputField = document.querySelector("input");
    let inputButton = document.querySelector("button");
    parent.removeChild(inputField);
    parent.removeChild(inputButton);
}



function chooseDifficulty() {
}

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

function displayCards(cards) {
    let len = cards.length;
    for (let i = 0; i < len ; i++){
        let card = document.createElement("img");
        let source = cards[i].img;
        card.setAttribute('src', source);
        card.setAttribute('class','card');
        let parent = document.querySelector(".all-cards");
        parent.appendChild(card);
    }
}

function initBoard() {
    displayEmptySlots(4, 4);
    displayCards(cards);}


function initGame() {
    initBoard();
}

initGame();
