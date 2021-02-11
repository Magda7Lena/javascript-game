
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

function enterUserName(){

    let parent = document.querySelector(".game-info");
    let user = document.getElementById("userName").value;
    let userDisplay = document.createElement('div');
    userDisplay.setAttribute("userinput",user);
    userDisplay.classList.add("UserName");
    parent.appendChild(userDisplay);
    userDisplay.innerText = `player: ${user}`;

    let formUser = document.getElementById("formUser");
    parent.removeChild(formUser);


}

function diffLevel(){
    let parent = document.querySelector(".game-info");
    let option = document.getElementById("difficulty").value;
    let optionDisplay = document.createElement("div");
    optionDisplay.setAttribute("diffLevel",option);
    optionDisplay.classList.add("selected");
    parent.appendChild(optionDisplay);
    optionDisplay.innerText = `difficulty level: ${option}`;

    let formLevel = document.getElementById("formLevel");
    parent.removeChild(formLevel);

    let slotsToremove = document.querySelectorAll(".slot");
    slotsToremove.forEach(function(element) {
    element.remove();
    });

    if (option === "Easy"){
        initBoard(4,4);
    } else if (option === "Medium") {
        initBoard(6,6);
    } else {
        initBoard(9,9);
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


function initBoard(rows, cols) {
    displayEmptySlots(rows,cols);
    uploadGameData(gameData);
    displayCards(freeSymbols);
}


function initGame() {

}

initGame();
