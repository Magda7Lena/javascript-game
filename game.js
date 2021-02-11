
let cards = [
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
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


let gameData = [
    {id:0, name:'jellyfish', img:"../static/images/1-jellyfish.png",},
    {id:1, name:'flamingo', img:"../static/images/7-flamingo.png",},
    {id:2, name:'airplane', img:"../static/images/3-airplane.png",},
    {id:4, name:'airplane', img:"../static/images/3-airplane.png",},
    {id:7, name:'flamingo', img:"../static/images/7-flamingo.png",},
    {id:10, name:'surf', img:"../static/images/6-surf.png",},
    {id:12, name:'surf', img:"../static/images/6-surf.png",},
    {id:14, name:'flamingo', img:"../static/images/7-flamingo.png",},
    {id:15, name:'jellyfish', img:"../static/images/1-jellyfish.png",}
];

let freeSymbols = [
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png",},
    {name: "flamingo", img: "../static/images/7-flamingo.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "airplane", img: "../static/images/3-airplane.png",},
    {name: "surf", img: "../static/images/6-surf.png",},
    {name: "surf", img: "../static/images/6-surf.png",},
];

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


function uploadGameData(gameData) {
    let grid = document.querySelectorAll('.slot');
    for(let slot in grid) {
        for(let index in gameData) {
            let recordID = gameData[index].id;
            if(slot == recordID){
                let fullSlot = document.createElement("img");
                let source = gameData[index].img;
                fullSlot.setAttribute('src', source);
                fullSlot.setAttribute('class','fullSlot');
                grid[slot].setAttribute('name',gameData[index].name);
                grid[slot].appendChild(fullSlot);
            }
        }
    }
}


function initBoard() {
    displayEmptySlots(4, 4);
    uploadGameData(gameData)
    displayCards(freeSymbols);
}


function initGame() {
    initBoard();
}

initGame()
