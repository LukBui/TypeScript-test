"use strict";
console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const sortDrinksByPriceASC = (drink1, drink2) => {
        return drink1.price - drink2.price;
    };
    const ascendSortingDrinks = (drinks) => {
        return [...drinks].sort(sortDrinksByPriceASC);
    };
    const drinks = [
        { name: "cola", price: 40 },
        { name: "fanta", price: 30 },
        { name: "sprite", price: 30 },
    ];
    const sortedDrinks = ascendSortingDrinks(drinks);
    console.log({
        drinks,
        sortedDrinks,
    });
}
console.groupEnd();
console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const returnNameValue = (itemObj, itemName, itemValue) => (Object.assign(Object.assign({}, itemObj), { [itemName]: itemValue }));
    const items1 = [{}, "Rex", 100];
    const items2 = [{ tv: 800 }, "Pex", 780];
    const items3 = [{ tv: 800, microwave: 300 }, "Smex", 140];
    const result1 = returnNameValue(...items1);
    const result2 = returnNameValue(...items2);
    const result3 = returnNameValue(...items3);
    console.log(items1, result1);
    console.log(items2, result2);
    console.log(items3, result3);
}
console.groupEnd();
