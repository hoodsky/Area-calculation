let tileWidth = document.getElementById('tile-width');
let tileHeight = document.getElementById('tile-height');
let oneTileArea = document.getElementById('one-tile-area');
let tileArea = document.getElementById('tile-area');
let tileNum = document.getElementById('tile-num');
let input = document.querySelectorAll('input');
let boxNum = document.getElementById('numerosity')


//input.onchange = () => {
//  calcArea()
//}
tileArea.onchange = () => {
    calcArea()
}
tileNum.onchange = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = calcOneTileArea * tileNum.value;
}
tileWidth.onchange = () => {
    calcArea()
}

tileHeight.onchange = () => {
    calcArea()
}

const calcArea = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    oneTileArea.innerText = `Площадь одной плитки ${calcOneTileArea} м²`;
    tileNum.value = tileArea.value / calcOneTileArea
    // console.log('change')
}
