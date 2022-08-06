// Creates 16x16 grid using javascript to dynamically add them into the DOM
const gridContainer = document.querySelector('#grid-container');

let createRows = (rows, columns) => {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-columns', columns);

  for (i = 0; i < (rows * columns); i++) {
    let gridCell = document.createElement('div');
    gridCell.textContent = (i + 1);
    gridContainer.appendChild(gridCell).className="grid-items";
  }
}

createRows(16, 16);


const cell = document.querySelectorAll('.grid-items');
// console.log(cell);

//https://css-tricks.com/snippets/javascript/random-hex-color/


cell.forEach(div => div.addEventListener('mouseenter', (e) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  console.log(e.target.textContent);
  // e.target.classList.add('grid-items_hover');
  e.target.style.backgroundColor = ("#" + randomColor);
  console.log(e.target.style.backgroundColor = ("#" + randomColor));
}))

// Toggles Dark Mode
const toggleDarkMode = () => {
  let entirePage = document.body;
  entirePage.classList.toggle("dark-mode")
}