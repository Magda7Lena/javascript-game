
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

initGame();

function initGame() {
    initBoard();
}

function initBoard2() {
    displayEmptySlots(4, 4);
    uploadGameData(gameData)
    displayCards(freeSymbols);

    initDragAndDrop();
}

function initBoard() {
    displayEmptySlots(4, 4);
    uploadGameData(gameData)
    displayCards(freeSymbols);

    initDragAndDrop();
}

function displayEmptySlots(rows, cols) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for (let slotId = 0; slotId < (rows * cols); slotId++) {
        let slot = document.createElement('div');
        slot.setAttribute('class', 'slot');
        slot.setAttribute('id', slotId);
        board.appendChild(slot).className = "slot drop-zone";
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

function RestartLevel(){
    console.log("Reloading");
  location.reload();


}


function displayCards(cards) {

    let len = cards.length;
    let cardsContainer = document.querySelector(".all-cards");
    for (let i = 0; i < len ; i++){
        let imgDiv = document.createElement("div");
        let card = document.createElement("img");
        let source = cards[i].img;
        let name = cards[i].name;
        card.setAttribute('src', source);
        imgDiv.appendChild(card);
        imgDiv.setAttribute('class','card');
        imgDiv.setAttribute('data-sym', name);
        imgDiv.setAttribute('draggable', 'true');
        let parent = document.querySelector(".all-cards");
        //parent.appendChild(card);
        cardsContainer.appendChild(imgDiv);
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

function initDragAndDrop() {

    let cards = document.querySelectorAll(".card");
    let slots = document.querySelectorAll(".slot");

    initCards(cards);
    initSlots(slots);
}


function initCards(cards) {
    for (let card of cards){
        initCard(card);
    }
 }

 function initCard(cards) {

         cards.addEventListener("dragstart", onDragStart);
         cards.addEventListener("drag", onDrag);
         cards.addEventListener("dragend", onDragEnd);
         //cards.setAttribute("draggable", "true");
 }

 function initSlots(slots) {
    for (let slot of slots){
        initSlot(slot);
    }
 }

  function initSlot(slot) {

     slot.addEventListener('drop', onDrop);
     slot.addEventListener('dragenter', onDragEnter);
     slot.addEventListener('dragover', onDragOver);
     slot.addEventListener('dragleave', onDragLeave);
 }

 function onDragStart(event) {
        setDropZonesHighlight();

        let symbolType = this.dataset.sym;
        this.classList.add('dragged');
        event.dataTransfer.setData('type/dragged-${symbolType}', symbolType);
        console.log(event.dataTransfer.getData('type/dragged-${symbolType}'))
        event.dataTransfer.setData('type/dragged-card', symbolType);
}

function onDrag(event){


}

function onDragEnd(event) {
        event.preventDefault();
        setDropZonesHighlight(false);
        this.classList.remove('dragged');
}

function onDragEnter(e) {

 }

  function onDragOver(e) {
    if (canDropHere(e)) {
        e.preventDefault();
    }
 }

 function onDrop(event) {
    let draggedElement = document.querySelector(".dragged");
    event.currentTarget.appendChild(draggedElement);
    let name = draggedElement.dataset.sym;
    let target = event.currentTarget.id;
    getNeighboursIndexes(target);
    // Highlight in red elements conflicting with logic ie. highlight same name cards in row
}

function showErrors() {

}

function getNeighboursIndexes(targetId) {
}



 function onDragLeave(event) {
    if (event.dataTransfer.types.includes(`type/dragged-card`) &&
        event.relatedTarget !== null &&
        event.currentTarget !== event.relatedTarget.closest('.drop-zone')) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget
        this.classList.remove("over-zone");
        this.classList.add("active-zone");
    }
 }

 function setDropZonesHighlight(highlighted = true){
    let dropZones = document.querySelectorAll(".drop-zone");
     for (let dropZone of dropZones){
         if(highlighted) {
             dropZone.classList.add("active-zone");
         }
         else {
             dropZone.classList.remove("active-zone");
         }
     }
 }

 function canDropHere(e) {
    let target = e.currentTarget;
    console.log(target.getElementsByTagName('img').length);
    if (target.getElementsByTagName('img').length > 0){
        return false;
    }
    return true;
 }




