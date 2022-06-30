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
    boxesPlus.value = Math.ceil(tileNum.value % numInBox.value);
}
tileNum.onchange = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = calcOneTileArea * tileNum.value;
    // tileNum.value = numInBox.value * numBox.value;
    console.log(Math.ceil(tileNum.value % numInBox.value))
    numBox.value = Math.floor(tileNum.value / numInBox.value)
    boxesPlus.value = Math.ceil(tileNum.value % numInBox.value);

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
    tileNum.value = Math.ceil(tileArea.value / calcOneTileArea);
    // console.log('change')
}
numInBox.onchange = () => {

    numBox.value = Math.floor(tileNum.value / numInBox.value);
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = calcOneTileArea * tileNum.value;
    console.log(Math.ceil(tileNum.value % numInBox.value));
    boxesPlus.value = Math.ceil(tileNum.value % numInBox.value);

}

numBox.onchange = () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = calcOneTileArea * tileNum.value;
}