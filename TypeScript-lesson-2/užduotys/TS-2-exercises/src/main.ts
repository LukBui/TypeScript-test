console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  type Drink = {
    name: string,
    price: number,
  };

  const sortDrinksByPriceASC = (drink1: Drink, drink2: Drink): number => {
    return drink1.price - drink2.price;
  }

  const ascendSortingDrinks = (drinks: Array<Drink>): Array<Drink> => {
    return [...drinks].sort(sortDrinksByPriceASC);
  };

  const drinks: Drink[] = [
    { name: "cola", price: 40 },
    { name: "fanta", price: 30 },
    { name: "sprite", price: 30 },
  ];

  const sortedDrinks: Drink[] = ascendSortingDrinks(drinks);

  console.log({
    drinks,
    sortedDrinks,
  });
}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  type ItemObj = {
    [key: string]: number,
  };

  const returnNameValue = (itemObj: ItemObj, itemName: string, itemValue: number): ItemObj => ({
    ...itemObj,
    [itemName]: itemValue,
  });

  type Arguments = [ItemObj, string, number];

  const items1: Arguments = [{}, "Rex", 100];
  const items2: Arguments = [{ tv: 800 }, "Pex", 780];
  const items3: Arguments = [{ tv: 800, microwave: 300 }, "Smex", 140];

  const result1: ItemObj = returnNameValue(...items1);
  const result2: ItemObj = returnNameValue(...items2);
  const result3: ItemObj = returnNameValue(...items3);

  console.log(items1, result1);
  console.log(items2, result2);
  console.log(items3, result3);
}
console.groupEnd();