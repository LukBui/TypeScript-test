"use strict";
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function arrayIndex(arr) {
        console.log(arr.length - 1);
    }
    console.log(numbers);
    arrayIndex(numbers);
    console.log(words);
    arrayIndex(words);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function arrayIndexRows(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    }
    console.log(numbers);
    arrayIndexRows(numbers);
    console.log(words);
    arrayIndexRows(words);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function arrayValueRows(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    }
    console.log(numbers);
    arrayValueRows(numbers);
    console.log(words);
    arrayValueRows(words);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    function indexValuesRows(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    }
    console.log(numbers);
    indexValuesRows(numbers);
    console.log(words);
    indexValuesRows(words);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function reversRows(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    console.log(numbers);
    reversRows(numbers);
    console.log(words);
    reversRows(words);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function arrayElementsIndexSpread(arr) {
        const res = arr.map((_, i) => i).join(' ');
        console.log(res);
        // console.log(...arr.map((_, i) => i));
    }
    console.log(numbers);
    arrayElementsIndexSpread(numbers);
    console.log(words);
    arrayElementsIndexSpread(words);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function arrayElementsValuesSpread(arr) {
        const res = arr.join(' ');
        console.log(res);
        // console.log(...arr);
    }
    console.log(numbers);
    arrayElementsValuesSpread(numbers);
    console.log(words);
    arrayElementsValuesSpread(words);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    function indexValuesCouples(arr) {
        const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
        console.log(res);
    }
    console.log(numbers);
    indexValuesCouples(numbers);
    console.log(words);
    indexValuesCouples(words);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function arrayMultiplier(arr) {
        return arr.map(x => x * 2);
    }
    const result = arrayMultiplier(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function arraySquare(arr) {
        return arr.map(x => x ** 2);
    }
    const result = arraySquare(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function elementIndexMultiplication(arr) {
        return arr.map((x, i) => x * i);
    }
    const result = elementIndexMultiplication(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function positiveNumbers(arr) {
        return arr.filter((x) => x > 0);
    }
    const result = positiveNumbers(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function notPositiveNumebrs(arr) {
        return arr.filter((x) => x <= 0);
    }
    const result = notPositiveNumebrs(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function evenNumbers(arr) {
        return arr.filter((x) => x % 2 === 0);
    }
    const result = evenNumbers(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function oddNumbers(arr) {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
    }
    const result = oddNumbers(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function positiveArray(arr) {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    const result = positiveArray(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
