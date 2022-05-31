"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const strings = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans = [true, true, true, true, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const firstElement = (arr) => {
        return arr[0];
    };
    console.log({ numbers, result: firstElement(numbers) });
    console.log({ strings, result: firstElement(strings) });
    console.log({ booleans, result: firstElement(booleans) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const lastElementOfArray = (arr) => {
        return arr[arr.length - 1];
    };
    console.log({ numbers, result: lastElementOfArray(numbers) });
    console.log({ strings, result: lastElementOfArray(strings) });
    console.log({ booleans, result: lastElementOfArray(booleans) });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const primitiveTypesCopies = (arr) => {
        const copy = arr.map(x => x);
        return copy;
    };
    console.log({ numbers, result: primitiveTypesCopies(numbers) });
    console.log({ strings, result: primitiveTypesCopies(strings) });
    console.log({ booleans, result: primitiveTypesCopies(booleans) });
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const arrayFromParameters = (value, count) => {
        return Array.from(new Array(count)).map(_ => value);
    };
    const data = [
        ['a', 2],
        [77, 4],
        [true, 1],
    ];
    data.forEach((args) => console.log(`arrayFromParameters(${args.join(', ')}):`, arrayFromParameters(...args)));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const sameTypesArrays = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const args1 = [[1, 2, 3], [4, 5, 6]];
    const args2 = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
    const args3 = [[true, true, true], [false, false, false]];
    console.log({ args: args1, result: sameTypesArrays(...args1) });
    console.log({ args: args2, result: sameTypesArrays(...args2) });
    console.log({ args: args3, result: sameTypesArrays(...args3) });
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const objectWithFunctions = (initialValue) => {
        let value = initialValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };
    const value1 = 7;
    const value2 = ["Jopapa", "Vaziuojam", "YesBoi"];
    const value3 = { name: 'Anakliatas', surname: 'Kliatas' };
    const obj1 = objectWithFunctions(value1);
    const obj2 = objectWithFunctions(value2);
    const obj3 = objectWithFunctions(value3);
    console.log('values');
    console.log({
        value1: obj1.getValue(),
        value2: obj2.getValue(),
        value3: obj3.getValue(),
    });
    console.log('changed values...');
    obj1.setValue(9);
    obj2.setValue(['Kitas']);
    obj3.setValue({ name: 'Hmmm', surname: 'Po Truputi' });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const isWorker = (person) => {
        return person.avgMonthlyPay !== undefined;
    };
    const groupingByType = (people) => {
        const groupOfPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupOfPeople = Object.assign({}, prevGroupedPeople);
            if (isWorker(person))
                newGroupOfPeople.workers.push(person);
            if (isStudent(person))
                newGroupOfPeople.students.push(person);
            else
                newGroupOfPeople.people.push(person);
            return newGroupOfPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupOfPeople;
    };
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
    // (Person | Student | Worker)[] === Person[] ????
    // https://www.javatpoint.com/typescript-duck-typing
    const groupOfPeople = groupingByType(people);
    console.log(groupOfPeople);
}
