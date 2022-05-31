"use strict";
const someNumber = 17;
const title = "Grace";
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const button = document.querySelector('#button');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const printText = () => console.log('Papausta!');
        button.addEventListener('click', printText);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const square = document.querySelector('#square');
        const addSquare = () => {
            const littleSquare = document.createElement('span');
            littleSquare.className = 'sq';
            square.append(littleSquare);
        };
        button.addEventListener('click', addSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const countContainer = document.querySelector('#counting');
        let squareCount = 0;
        const squareCounter = () => {
            squareCount++;
            countContainer.innerHTML = `Kvadratėlių skaičius: ${squareCount}`;
        };
        button.addEventListener('click', squareCounter);
    }
    console.groupEnd();
}
console.groupEnd();
