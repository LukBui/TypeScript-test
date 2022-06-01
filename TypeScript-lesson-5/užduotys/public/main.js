"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    // Funkcijos:
    const personIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    // Sprendimas:
    const individuals = people.map(personIdentity);
    // Spausdinimas:
    console.table(people);
    console.table(individuals);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectObject = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectObject);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const selectObject = ({ name, surname, sex }) => ({
        name, surname, sex
    });
    const final = people.map(selectObject);
    console.table(people);
    console.table(final);
}
console.groupEnd();
console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.table(people);
    console.table(males);
}
console.groupEnd();
console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
    const isFemale = ({ sex }) => sex === 'female';
    const females = people.filter(isFemale);
    console.table(people);
    console.table(females);
}
console.groupEnd();
console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
    const personHasACar = ({ hasCar }) => Boolean(hasCar);
    const createPerson = ({ name, surname }) => ({ name, surname });
    const identityFinder = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname });
        return result;
    };
    const peopleWithCars = people.filter(personHasACar);
    const indentities = peopleWithCars.map(createPerson);
    const identitiess2 = people.reduce(identityFinder, []);
    console.table(people);
    console.table(indentities);
    console.table(identitiess2);
}
console.groupEnd();
console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
    const marriedFinder = (result, person) => {
        if (person.married)
            result.push(person);
        return result;
    };
    const marriedPeople = people.reduce(marriedFinder, []);
    console.table(people);
    console.table(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const peopleWhoDrives = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const groupedPeopleBySex = people.reduce(peopleWhoDrives, {});
    console.table(people);
    console.log(groupedPeopleBySex);
}
console.groupEnd();
console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToSalary = (_a) => {
        var { income } = _a, person = __rest(_a, ["income"]);
        const result = Object.assign({}, person);
        if (income)
            result.salary = income;
        return result;
    };
    const income = people.map(convertToSalary);
    console.table(people);
    console.table(income);
}
console.groupEnd();
console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const createAnonymous = (_a) => {
        var { name, surname, sex } = _a, anonPerson = __rest(_a, ["name", "surname", "sex"]);
        return anonPerson;
    };
    const unknownPeople = people.map(createAnonymous);
    console.table(people);
    console.table(unknownPeople);
}
console.groupEnd();
console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const showFullname = (_a) => {
        var { name, surname } = _a, rest = __rest(_a, ["name", "surname"]);
        return (Object.assign(Object.assign({}, rest), { fullname: name + ' ' + surname }));
    };
    const fullnamePerson = people.map(showFullname);
    console.table(people);
    console.table(fullnamePerson);
}
console.groupEnd();
