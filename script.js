console.log("Hello World");
const container = document.querySelector('#container');
let defaultSquare = 16;
let squareNum = document.getElementById("numInput").value = 16;

//function that sets width a

//creates div and adds class of gridSquare
function createGrid(col, rows){
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('squareDiv');
    }

    //this is the event listener to fill in the squares when you hover over them
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', fillGrid));

    //event listeners for creating a new grid
    let newGridButt = document.getElementById("newGridButt");
    newGridButt.addEventListener("click", newGrid);
}

function fillGrid(x){
    x.target.style = "background-color: black"
}

function clearGrid(){
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "#ffffff");
}

function newGrid(){
    squareNum = document.getElementById("numInput").value;
    if(squareNum < 16 || squareNum > 64){
        alert("Please enter in a number between 16-64.")
    }
    else{
    createGrid(squareNum, squareNum);
    clearGrid();
    }
    
}



createGrid(defaultSquare, defaultSquare);
