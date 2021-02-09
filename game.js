let symbols = [
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

let grid = document.querySelectorAll('slot');




// function initBoard() {
//     let slot = document.createElement('div');
//     slot.setAttribute('class', 'slot');
//     let div = document.querySelector('.board');
//     div.appendChild(slot);
//
//     let img = document.createElement("img");
//     img.setAttribute('src', 'img/donut.png');
//     let parent = document.querySelector(".symbols");
//     parent.appendChild(img);
// }
const board = document.getElementById("board");

function initBoard(rows, cols) {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);
  for (let b = 0; b < (rows * cols); b++) {
      let slot = document.createElement('div');
        slot.setAttribute('class', 'slot');
    board.appendChild(slot).className = "slot";
  }
}

function initGame() {
    initBoard(4,4);
}

initGame();
