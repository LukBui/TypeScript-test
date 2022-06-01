"use strict";
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const accommodation1 = {
            address: 'Stepono 20',
            type: 'House',
        };
        const accommodation2 = {
            address: 'Algirdo 90',
            type: 'Flat',
        };
        console.log({
            accommodation1,
            accommodation2,
        });
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car1 = {
            brand: 'Audi',
            model: 'RS7',
            transmission: 'Automatic',
        };
        const car2 = {
            brand: 'BMW',
            model: 'M5',
            transmission: 'Manual',
        };
        console.log({
            car1,
            car2,
        });
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const assets1 = [{
                address: 'Stepono 20',
                type: 'House',
            }, {
                address: 'Algirdo 90',
                type: 'Flat',
            }];
        const assets2 = [{
                brand: 'Audi',
                model: 'RS7',
                transmission: 'Automatic',
            }, {
                brand: 'BMW',
                model: 'M5',
                transmission: 'Manual',
            }];
        console.table(assets1);
        console.table(assets2);
    }
    console.groupEnd();
}
console.groupEnd();
