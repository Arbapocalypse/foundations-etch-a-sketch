const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
mainDiv.innerHTML = 'Etch-a-Sketch Project';
document.body.appendChild(mainDiv);

const containerDiv = document.createElement('div');
containerDiv.classList.add('containerDiv');
document.body.appendChild(containerDiv);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
mainDiv.appendChild(buttons)

const reset = document.createElement('button');
reset.classList.add('reset');
reset.innerText = 'Clear';
buttons.appendChild(reset);

const randomColor = document.createElement('button');
randomColor.classList.add('randomColor');
randomColor.innerText = 'Random Color';
buttons.appendChild(randomColor);

const colorBlack = document.createElement('button');
colorBlack.classList.add('colorBlack');
colorBlack.innerText = 'Black';
buttons.appendChild(colorBlack);

function makeRows (rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        containerDiv.appendChild(cell).className = "grid-item";
    }
}

makeRows(16, 16);

let paint = document.getElementsByClassName("grid-item");

function addMouseoverEventListener() {  
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = "black";
        });
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function enableMultiColor() {
    console.log('poop');
    paint = document.getElementsByClassName("grid-item");
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
    }
}

addMouseoverEventListener();

function getNewBoard() {
    let squares = '';
    let squaresInt = 0;
    let removeOldGrid = document.getElementById("containerDiv");
    removeOldGrid.innerHTML = '';
    do {
    squares = prompt('How many squares per side? Number can not exceed 100.');
    squaresInt = parseInt(squares);
    console.log(squaresInt);
    } while (squaresInt > 100);
    makeRows(squaresInt, squaresInt);
    paint = document.getElementsByClassName("grid-item");
    addMouseoverEventListener();
}

function clearBoard() {
    
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].style.backgroundColor = "";
        
    }
    getNewBoard();
}

colorBlack.addEventListener('click', addMouseoverEventListener)

reset.addEventListener('click', clearBoard);

randomColor.addEventListener('click', enableMultiColor)