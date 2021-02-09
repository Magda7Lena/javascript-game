
let symbols = [
    {name: "donut", img:"img/donut.png",},
    {name: "donut", img:"img/donut.png",},
    {name: "donut", img:"img/donut.png",},
    {name: "donut", img:"img/donut.png",},
    {name: "flamingo", img:"img/flamingo.png",},
    {name: "flamingo", img:"img/flamingo.png",},
    {name: "flamingo", img:"img/flamingo.png",},
    {name: "flamingo", img:"img/flamingo.png",},
    {name: "cactus", img:"img/cactus.png",},
    {name: "cactus", img:"img/cactus.png",},
    {name: "cactus", img:"img/cactus.png",},
    {name: "cactus", img:"img/cactus.png",},
    {name: "emot", img:"img/emot.png",},
    {name: "emot", img:"img/emot.png",},
    {name: "emot", img:"img/emot.png",},
    {name: "emot", img:"img/emot.png",},
]

let grid = document.querySelectorAll('slot')




function initBoard() {
    let slot = document.createElement('div')
    slot.setAttribute('slot')
    let div = document.querySelector('.board')
    div.appendChild(slot)


    let img = document.createElement("img");
    img.setAttribute('src','img/donut.png');
    let parent = document.querySelector(".symbols");
    parent.appendChild(img)


    // for(let symbol of symbols){
    //     let img = document.createElement('img')
    //     img.setAttribute('src','img/donut.png')
    // }

}


function initGame() {
    initBoard()

}

initGame();