let tileWidth = document.getElementById('tile-width');
let tileHeight = document.getElementById('tile-height');
let oneTileArea = document.getElementById('one-tile-area');
let tileArea = document.getElementById('tile-area');
let tileNumerosity = document.getElementById('tile-numerosity');
let input = document.querySelectorAll('input');

//input.onchange = () => {
//  calcArea()
//}

 tileWidth.onchange = () => {
  calcArea()
 }

tileHeight.onchange = () => {
calcArea()
}

const calcArea = () => {
 oneTileArea.innerText = `Площадь одной плитки ${(tileWidth.value/100) * (tileHeight.value/100)} м²`;


// console.log('change')
}
