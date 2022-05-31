"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person1 = ['Kestas', 100];
        const person2 = ['Petras', 47];
        console.log(person1, person2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const persondog = [{
                name: 'Deivis',
                age: 78
            }, {
                name: 'Keksas',
                age: 6,
                breed: 'Labradoodle'
            }];
        console.log(persondog);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle = [[-1, 1], [-2, 2], [-3, 3]];
        console.log({
            triangle,
        });
    }
    console.groupEnd();
}
console.groupEnd();
