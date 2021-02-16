var gameSize = 0;

let gameDataHard = [
    {id: 4, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 5, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 6, name: "airplane", img: "../static/images/3-airplane.png"},
    {id: 7, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 8, name: "flamingo", img: "../static/images/7-flamingo.png"},
    {id: 14, name: "whale", img: "../static/images/8-whale.png"},
    {id: 16, name: "surf", img: "../static/images/6-surf.png"},
    {id: 24, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 25, name: "whale", img: "../static/images/8-whale.png"},
    {id: 27, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 28, name: "flamingo", img: "../static/images/7-flamingo.png"},
    {id: 29, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 31, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 42, name: "shell", img: "../static/images/5-shell.png"},
    {id: 48, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 49, name: "pelican", img: "../static/images/9-pelican.png"},
    {id: 52, name: "airplane", img: "../static/images/3-airplane.png"},
    {id: 54, name: "airplane", img: "../static/images/3-airplane.png"},
    {id: 55, name: "pelican", img: "../static/images/9-pelican.png"},
    {id: 65, name: "shell", img: "../static/images/5-shell.png"},
    {id: 67, name: "flamingo", img: "../static/images/7-flamingo.png"},
    {id: 68, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 72, name: "whale", img: "../static/images/8-whale.png"},
    {id: 73, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 74, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 77, name: "shell", img: "../static/images/5-shell.png"},

];

let freeSymbolsHard = [
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "airplane", img: "../static/images/3-airplane.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "flamingo", img: "../static/images/7-flamingo.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},
    {name: "surf", img: "../static/images/6-surf.png"},

];

let gameDataMedium = [
    {id: 0, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 5, name: "pelican", img: "../static/images/9-pelican.png"},
    {id: 8, name: "shell", img: "../static/images/5-shell.png"},
    {id: 9, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 10, name: "whale", img: "../static/images/8-whale.png"},
    {id: 11, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 12, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 14, name: "pelican", img: "../static/images/9-pelican.png"},
    {id: 16, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 18, name: "whale", img: "../static/images/8-whale.png"},
    {id: 19, name: "shell", img: "../static/images/5-shell.png"},
    {id: 24, name: "shell", img: "../static/images/5-shell.png"},
    {id: 25, name: "whale", img: "../static/images/8-whale.png"},
    {id: 27, name: "pelican", img: "../static/images/9-pelican.png"},
    {id: 28, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 31, name: "windsurf", img: "../static/images/2-windsurf.png"},
    {id: 32, name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {id: 33, name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {id: 34, name: "shell", img: "../static/images/5-shell.png"}
];

let freeSymbolsMedium = [
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "windsurf", img: "../static/images/2-windsurf.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "lighthouse", img: "../static/images/4-lighthouse.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "shell", img: "../static/images/5-shell.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "whale", img: "../static/images/8-whale.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "pelican", img: "../static/images/9-pelican.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"},
    {name: "jellyfish", img: "../static/images/1-jellyfish.png"}
];

let gameData = [
    {id: 0, name: 'jellyfish', img: "../static/images/1-jellyfish.png",},
    {id: 1, name: 'flamingo', img: "../static/images/7-flamingo.png",},
    {id: 2, name: 'airplane', img: "../static/images/3-airplane.png",},
    {id: 4, name: 'airplane', img: "../static/images/3-airplane.png",},
    {id: 7, name: 'flamingo', img: "../static/images/7-flamingo.png",},
    {id: 10, name: 'surf', img: "../static/images/6-surf.png",},
    {id: 12, name: 'surf', img: "../static/images/6-surf.png",},
    {id: 14, name: 'flamingo', img: "../static/images/7-flamingo.png",},
    {id: 15, name: 'jellyfish', img: "../static/images/1-jellyfish.png",}
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

}

function initBoard(rows, cols) {

    displayEmptySlots(rows, cols);

    //uploadGameData(gameData);
    //displayCards(freeSymbols);

    // initDragAndDrop();
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

function enterUserName() {

    let parent = document.querySelector(".game-info");
    let user = document.getElementById("userName").value;
    let userDisplay = document.createElement('div');
    userDisplay.setAttribute("userinput", user);
    userDisplay.classList.add("UserName");
    parent.appendChild(userDisplay);
    userDisplay.innerText = `player: ${user}`;

    let formUser = document.getElementById("formUser");
    parent.removeChild(formUser);


}


function diffLevel() {
    let parent = document.querySelector(".game-info");
    let option = document.getElementById("difficulty").value;
    let optionDisplay = document.createElement("div");
    optionDisplay.setAttribute("diffLevel", option);
    optionDisplay.classList.add("selected");
    parent.appendChild(optionDisplay);
    optionDisplay.innerText = `difficulty level: ${option}`;

    let formLevel = document.getElementById("formLevel");
    parent.removeChild(formLevel);

    let slotsToremove = document.querySelectorAll(".slot");
    slotsToremove.forEach(function (element) {
        element.remove();
    });

    if (option === "Easy") {
        //displayTimer();
        gameSize = 4;
        initBoard(4, 4);
        uploadGameData(gameData);
        displayCards(freeSymbols);
        initDragAndDrop();
    } else if (option === "Medium") {
        gameSize = 6;
        initBoard(6, 6);
        uploadGameData(gameDataMedium);
        displayCards(freeSymbolsMedium);
        initDragAndDrop();
    } else {
        gameSize = 9;
        initBoard(9, 9);
        uploadGameData(gameDataHard);
        displayCards(freeSymbolsHard);
        initDragAndDrop();
    }
}

function RestartLevel() {
    location.reload();

}


function displayCards(cards) {

    let len = cards.length;
    let cardsContainer = document.querySelector(".all-cards");
    for (let i = 0; i < len; i++) {
        let imgDiv = document.createElement("div");
        let card = document.createElement("img");
        let source = cards[i].img;
        let name = cards[i].name;
        card.setAttribute('src', source);
        imgDiv.appendChild(card);
        imgDiv.setAttribute('class', 'card');
        imgDiv.setAttribute('data-sym', name);
        imgDiv.setAttribute('draggable', 'true');
        let parent = document.querySelector(".all-cards");
        //parent.appendChild(card);
        cardsContainer.appendChild(imgDiv);
    }
}

function uploadGameData(gameData) {
    let grid = document.querySelectorAll('.slot');
    for (let slot in grid) {
        for (let index in gameData) {
            let recordID = gameData[index].id;
            if (slot == recordID) {
                let fullSlot = document.createElement("img");
                let source = gameData[index].img;
                fullSlot.setAttribute('src', source);
                fullSlot.setAttribute('class', 'fullSlot');
                grid[slot].setAttribute('name', gameData[index].name);
                grid[slot].appendChild(fullSlot);
            }
        }
    }
}

function displayTimer() {

    let parent = document.querySelector('.game-info');
    let stopwatch = document.createElement('div');
    let timer = document.createElement('ul');
    let controls = document.createElement('div');
    let startButton = document.createElement('button');
    let stopButton = document.createElement('button');
    let restartButton = document.createElement('button');
    let resetButton = document.createElement('button');


    stopwatch.setAttribute("class", "container");
    timer.setAttribute("class", "panel");
    controls.setAttribute("class", "btn-group");
    controls.setAttribute("role", "toolbar");
    controls.setAttribute("aria-label", "Toolbar with button groups");
    startButton.setAttribute("class", "btn btn-primary");
    stopButton.setAttribute("class", "btn btn-primary");
    restartButton.setAttribute("class", "btn btn-primary");
    resetButton.setAttribute("class", "btn btn-primary");

    parent.appendChild(stopwatch);
    stopwatch.appendChild(timer);
    stopwatch.appendChild(controls);
    controls.appendChild(startButton);
    controls.appendChild(stopButton);
    controls.appendChild(restartButton);
    controls.appendChild(resetButton);
}

function initDragAndDrop() {

    let cards = document.querySelectorAll(".card");
    let slots = document.querySelectorAll(".slot");

    initCards(cards);
    initSlots(slots);
}


function initCards(cards) {
    for (let card of cards) {
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
    for (let slot of slots) {
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
    // return background color to blue once picked up
    getNeighboursIndexes(this.parentNode.id, symbolType, false);
}

function onDrag(event) {


}

function onDragEnd(event) {
    event.preventDefault();
    setDropZonesHighlight(false);
    this.classList.remove('dragged');
    getNeighboursIndexes(this.parentNode.id, this.dataset.sym, true);
    checkWin()
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
    // console.log("dragged ele")
    event.currentTarget.appendChild(draggedElement);
    let name = draggedElement.dataset.sym;
    let parent = draggedElement.parentElement
    parent.setAttribute('name', name);
    let target = event.currentTarget.id;
    getNeighboursIndexes(target);


}


function getNeighboursIndexes(targetId, cardName, isPlaced) {
    let row = [];
    let col = [];
    let neighs = [];

    let start = targetId - targetId % gameSize;

    for (let i = 0; i < gameSize; i++) {
        if (start + i == targetId) {
            continue;
        }
        neighs.push(start + i);
    }

    let x = targetId;
    while (x > 0) {
        x -= gameSize;
        if (x >= 0) {
            neighs.push(x);
        }
    }

    x = parseInt(targetId);

    while (x < gameSize * gameSize) {
        x += gameSize;
        if (x < gameSize * gameSize) {
            neighs.push(x);
        }
    }
    console.log(neighs);

    for (let id of neighs) {
        console.log(id);
        let currTile = document.getElementById(String(id));
        if (currTile.getAttribute("name") == cardName) {
            if (isPlaced) {
                currTile.style.backgroundColor = "red";
            } else {
                currTile.style.backgroundColor = "#41c9f5";
            }
        } else if (currTile.childElementCount > 0) {
            if (currTile.childNodes[0].dataset.sym == cardName) {
                if (isPlaced) {
                    currTile.childNodes[0].style.backgroundColor = "red";
                } else {
                    currTile.childNodes[0].style.backgroundColor = "#41c9f5";
                }

            }
        }
    }

}

function onDragLeave(event) {
    if (event.dataTransfer.types.includes(`type/dragged-card`) &&
        event.relatedTarget !== null &&
        event.currentTarget !== event.relatedTarget.closest('.drop-zone')) {
        this.classList.remove("over-zone");
        this.classList.add("active-zone");
    }
}

function setDropZonesHighlight(highlighted = true) {
    let dropZones = document.querySelectorAll(".drop-zone");
    for (let dropZone of dropZones) {
        if (highlighted) {
            dropZone.classList.add("active-zone");
        } else {
            dropZone.classList.remove("active-zone");
        }
    }
}

function canDropHere(e) {
    let target = e.currentTarget;
    console.log(target.getElementsByTagName('img').length);
    if (target.getElementsByTagName('img').length > 0) {
        return false;
    }
    return true;
}


function checkWin() {
    let board = document.querySelector('.board');
    let slots = board.childNodes;
    let allCardsContainer = document.querySelector('.all-cards.mixed-cards');
    let symbolsLeft = allCardsContainer.childNodes;
    if (symbolsLeft.length == 0) {
        if (slots.length == 16) {
            let check = checkSmallBoard(slots);
            alert(check)
            return check;
        }
        if (slots.length == 36) {
            let check = checkMediumBoard(slots);
            alert(check)
            return check;
        }
        if (slots.length == 81) {
            let check = checkLargeBoard(slots)
            alert(check)
            return check
        }
    } else {
        return false;
    }
}


function validationOfSymbols(listOfSymbols) {
    let len = listOfSymbols.length
    let names = []
    let uniqeNames = []
    for (let i = 0; i < len; i++) {
        let name = listOfSymbols[i].getAttribute('name')
        names.push(name)
        uniqeNames = [...new Set(names)]
    }
    let winCondition
    if (uniqeNames.length == len) {
        winCondition = true
    } else {
        winCondition = false
    }
    return winCondition
}


function checkListOfCol(slots, index) {
    let listOfSlots = []
    if (slots.length == 16) {
        for (index; index < slots.length; index) {
            listOfSlots.push(slots[index]);
            index = index + 4;
        }
        return validationOfSymbols(listOfSlots);
    }
    if (slots.length == 36) {
        for (index; index < slots.length; index) {
            listOfSlots.push(slots[index]);
            index = index + 6;
        }
        return validationOfSymbols(listOfSlots);

    }
    if (slots.length == 81) {
        for (index; index < slots.length; index) {
            listOfSlots.push(slots[index]);
            index = index + 9;
        }
        return validationOfSymbols(listOfSlots);
    }
}


function checkListOfRows(slots, index) {
    let listOfSlots = []
    if (slots.length == 16) {
        for (let i = index; i < index + 4; i) {
            listOfSlots.push(slots[i])
            i += 1
        }
        return validationOfSymbols(listOfSlots)
    }
    if (slots.length == 36) {
        for (let i = index; i < index + 6; i) {
            listOfSlots.push(slots[i])
            i += 1
        }
        return validationOfSymbols(listOfSlots)

    }
    if (slots.length == 81) {
        for (let i = index; i < index + 9; i) {
            listOfSlots.push(slots[i])
            i += 1
        }
        return validationOfSymbols(listOfSlots)
    }
}


function checkSmallBoard(slots) {
    let index = 0;
    let winFlag;
    do {
        winFlag = checkListOfCol(slots, index);
        if (winFlag == false) {
            break;
        }
        index += 1;
    } while (index < 4);
    if (winFlag == true) {
        index = 0;
        do {
            winFlag = checkListOfRows(slots, index);
            if (winFlag == false) {
                break;
            }
            index += 4;
        } while (index < 15);
    }
    return winFlag;
}


function checkMediumBoard(slots) {
    let index = 0;
    let winFlag;
    do {
        winFlag = checkListOfCol(slots, index);
        if (winFlag == false) {
            break;
        }
        index += 1;
    } while (index < 6);
    if (winFlag == true) {
        index = 0;
        do {
            winFlag = checkListOfRows(slots, index);
            if (winFlag == false) {
                break;
            }
            index += 6;
        } while (index < 35);
    }
    return winFlag;
}


function checkLargeBoard(slots) {
    let index = 0;
    let winFlag;
    do {
        winFlag = checkListOfCol(slots, index);
        if (winFlag == false) {
            break;
        }
        index += 1;
    } while (index < 9);
    if (winFlag == true) {
        index = 0;
        do {
            winFlag = checkListOfRows(slots, index);
            if (winFlag == false) {
                break;
            }
            index += 6;
        } while (index < 80);
    }
    return winFlag;
}






