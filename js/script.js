let tileWidth = document.getElementById('tile-width'); //ширина плитки
let tileHeight = document.getElementById('tile-height'); //высота плитки
let oneTileArea = document.getElementById('one-tile-area'); //площадь одной плитки
let tileArea = document.getElementById('tile-area'); //общая площадь
let tileNum = document.getElementById('tile-num'); //количество плитки
let input = document.querySelectorAll('input'); //
let numInBox = document.getElementById('num-in-box') //штук в коробке
let numBox = document.getElementById('num-box'); //количество коробок
let boxesPlus = document.getElementById('boxes-plus');

//input.onchange = () => {
//  calcArea()
//}
tileArea.onchange = () => {
    calcArea()
    numBox.value = Math.floor(tileNum.value / numInBox.value);
    boxesPlus.value = tileNum.value % numInBox.value;
}
tileNum.onchange = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    // tileNum.value = numInBox.value * numBox.value;
    numBox.value = Math.floor(tileNum.value / numInBox.value)
    boxesPlus.value = tileNum.value % numInBox.value;

}
tileWidth.onchange = () => {
    calcArea()
}

tileHeight.onchange = () => {
    calcArea()
}

const calcArea = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    oneTileArea.innerText = `Площадь одной плитки ${Math.round(calcOneTileArea * 10000) / 10000} м²`;
    tileNum.value = Math.ceil(tileArea.value / calcOneTileArea);
    numBox.value = Math.floor(tileNum.value / numInBox.value)
    boxesPlus.value = tileNum.value % numInBox.value;

}
numInBox.onchange = () => {
    numBox.value = Math.floor(tileNum.value / numInBox.value);
    boxesPlus.value = tileNum.value % numInBox.value;
}

numBox.onchange = () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
}

boxesPlus.onchange = () => {
    tileNum.value = numInBox.value * numBox.value + +boxesPlus.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    if (boxesPlus.value >= numInBox.value) {
        numBox.value++;
        boxesPlus.value = 0;
    }
    if (boxesPlus.value < 0) {
        numBox.value--;
        boxesPlus.value = numInBox.value - 1;
    }
}