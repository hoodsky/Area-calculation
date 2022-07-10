"use strict";

let tileWidth = document.getElementById('tile-width'); //ширина плитки
let tileHeight = document.getElementById('tile-height'); //высота плитки
let oneTileArea = document.getElementById('one-tile-area'); //площадь одной плитки
let tileArea = document.getElementById('tile-area'); //общая площадь
let tileNum = document.getElementById('tile-num'); //количество плитки
let numInBox = document.getElementById('num-in-box') //штук в коробке
let numBox = document.getElementById('num-box'); //количество коробок
let boxesPlus = document.getElementById('boxes-plus');

let input = document.querySelectorAll('input[type=number]');


input.forEach(i => {
    i.addEventListener('focus', () => {
        i.select();
    })
})


// let tileRadio = document.getElementById('tile');
// let tileSection = document.querySelector('.tile');

// tileRadio.addEventListener('change', () => {
//     if (tileRadio.checked) {
//         // tileSection.style.opacity = "1";
//         // tileSection.style.transform = 'scale(1)';
//         // console.log("Checkbox is checked..");
//         // tileSection.style.display = "flex";
//         tileSection.classList.add('active');
//     }
//     else {
//         tileSection.classList.remove('active');
//     }
// })

//input.onchange = () => {
//  calcArea()
//}
const calcOneTile = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    oneTileArea.innerText = `Площадь одной плитки ${Math.round(calcOneTileArea * 10000) / 10000} м²`;
};
const calcArea = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileNum.value = Math.ceil(tileArea.value / calcOneTileArea);
};

const calcNumBox = () => {
    numBox.value = Math.floor(tileNum.value / numInBox.value);
    boxesPlus.value = tileNum.value % numInBox.value;
};

tileArea.addEventListener('input', () => {
    calcArea();
    calcOneTile();
    calcNumBox();
});

tileArea.onchange = () => {
    calcArea();
    calcOneTile();
    calcNumBox();
};

tileNum.addEventListener('input', () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    calcNumBox();
});

tileNum.onchange = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    calcNumBox();

}
tileWidth.onchange = () => {
    calcArea();
    calcOneTile();
};

tileWidth.addEventListener('input', () => {
    calcArea();
    calcOneTile();

});

tileHeight.onchange = () => {
    calcArea();
    calcOneTile();

};

tileHeight.addEventListener('input', () => {
    calcArea();
    calcOneTile();
})

numInBox.onchange = () => {
    calcNumBox();
};

numBox.onchange = () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
};
numBox.addEventListener('input', () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
});
boxesPlus.addEventListener('input', () => {
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
})
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
};
