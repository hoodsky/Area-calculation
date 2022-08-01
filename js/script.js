"use strict";
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
            function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            },
            function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

const tileWidth = document.getElementById('tile-width'); //ширина плитки
const tileHeight = document.getElementById('tile-height'); //высота плитки
const oneTileArea = document.getElementById('one-tile-area'); //площадь одной плитки
const tileArea = document.getElementById('tile-area'); //общая площадь
const tileNum = document.getElementById('tile-num'); //количество плитки
const numInBox = document.getElementById('num-in-box') //штук в коробке
const numBox = document.getElementById('num-box'); //количество коробок
const boxesPlus = document.getElementById('boxes-plus');
const tileNumArea = document.getElementById('tile-num-area'); //точная площадь нужного количества плиток (span)
const numInBoxArea = document.getElementById('num-in-box-area'); //точная площадь в одной пачке
const input = document.querySelectorAll('input[type=number]');


input.forEach(i => {
    i.addEventListener('focus', () => {
        i.select();
    })
})

const calcOneTile = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    oneTileArea.innerText = Math.round(calcOneTileArea * 10000) / 10000;
};
const calcArea = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileNum.value = Math.ceil(tileArea.value / calcOneTileArea);

    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;
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
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

    calcNumBox();
});

tileNum.onchange = () => {
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

    calcNumBox();

}
tileWidth.onchange = () => {
    calcArea();
    calcOneTile();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000

};

tileWidth.addEventListener('input', () => {
    calcArea();
    calcOneTile();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000

});

tileHeight.onchange = () => {
    calcArea();
    calcOneTile();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000

};

tileHeight.addEventListener('input', () => {
    calcArea();
    calcOneTile();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000

})

numInBox.onchange = () => {
    calcNumBox();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000
};

numInBox.addEventListener('input', () => {
    calcNumBox();
    numInBoxArea.innerHTML = Math.round(numInBox.value * ((tileWidth.value / 100) * (tileHeight.value / 100)) * 1000) / 1000
})

numBox.onchange = () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

};
numBox.addEventListener('input', () => {
    tileNum.value = numInBox.value * numBox.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

});
boxesPlus.addEventListener('input', () => {
    tileNum.value = numInBox.value * numBox.value + +boxesPlus.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

    if (+boxesPlus.value >= +numInBox.value) {
        numBox.value++;
        boxesPlus.value = 0;
    }
    if (+boxesPlus.value < 0) {
        numBox.value--;
        boxesPlus.value = numInBox.value - 1;
    }
})
boxesPlus.onchange = () => {
    tileNum.value = numInBox.value * numBox.value + +boxesPlus.value;
    let calcOneTileArea = (tileWidth.value / 100) * (tileHeight.value / 100);
    tileArea.value = Math.round((calcOneTileArea * tileNum.value) * 100) / 100;
    tileNumArea.innerHTML = Math.round((calcOneTileArea * tileNum.value) * 1000) / 1000;

    if (+boxesPlus.value >= +numInBox.value) {
        numBox.value++;
        boxesPlus.value = 0;
    }
    if (+boxesPlus.value < 0) {
        numBox.value--;
        boxesPlus.value = numInBox.value - 1;
    }
};
