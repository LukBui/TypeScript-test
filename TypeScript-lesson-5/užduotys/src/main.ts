type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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
  // Tipai:
  type Individual = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personIdentity = ({ name, surname }: Person): Individual => {
    return { name, surname };
  }

  // Sprendimas:
  const individuals: Individual[] = people.map(personIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(individuals);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type Object = Pick<Required<Person>, "hasCar" | "married">;

  const selectObject = ({ married, hasCar }: Person): Object => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: Object[] = people.map(selectObject);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type Object = {
    name: Person["name"],
    surname: Person["surname"],
    sex: Person["sex"],
  }

  const selectObject = ({ name, surname, sex }: Person): Object => ({
    name, surname, sex
  });

  const final: Object[] = people.map(selectObject);

  console.table(people);
  console.table(final);
}
console.groupEnd();

console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  }

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.table(people);
  console.table(males);
}
console.groupEnd();

console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
  type Female = Omit<Person, 'sex'> & {
    sex: 'female',
  }

  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const females: Female[] = people.filter(isFemale) as Female[];

  console.table(people);
  console.table(females);
}
console.groupEnd();

console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  const personHasACar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createPerson = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityFinder = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (hasCar) result.push({ name, surname })
    return result;
  }

  const peopleWithCars: Person[] = people.filter(personHasACar);
  const indentities: Identity[] = peopleWithCars.map(createPerson);
  const identitiess2: Identity[] = people.reduce(identityFinder, []);

  console.table(people);
  console.table(indentities);
  console.table(identitiess2);
}
console.groupEnd();

console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
  type MarriedPeople = Omit<Person, "married"> & {
    married: true
  };

  const marriedFinder = (result: MarriedPeople[], person: Person): MarriedPeople[] => {
    if (person.married) result.push(person as MarriedPeople);

    return result;
  }

  const marriedPeople: MarriedPeople[] = people.reduce(marriedFinder, []);

  console.table(people);
  console.table(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type PoepleWithCars = {
    [Key in Person["sex"]]?: number
  }

  const peopleWhoDrives = (result: PoepleWithCars, person: Person): PoepleWithCars => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const groupedPeopleBySex: PoepleWithCars = people.reduce(peopleWhoDrives, {});

  console.table(people);
  console.log(groupedPeopleBySex);
}
console.groupEnd();

console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type PersonIncome = Omit<Person, 'income'> & {
    salary?: Person['income']
  }

  const convertToSalary = ({ income, ...person }: Person): PersonIncome => {
    const result: PersonIncome = { ...person };

    if (income) result.salary = income;

    return result;
  }

  const income: PersonIncome[] = people.map(convertToSalary);

  console.table(people);
  console.table(income);

}
console.groupEnd();

console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type UnknownPeople = Omit<Person, 'name' | 'surname' | 'sex'>;

  const createAnonymous = ({ name, surname, sex, ...anonPerson }: Person): UnknownPeople => anonPerson;

  const unknownPeople: UnknownPeople[] = people.map(createAnonymous);

  console.table(people);
  console.table(unknownPeople);

}
console.groupEnd();

console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type Fullname = Omit<Person, 'name' | 'surname'> & {
    readonly fullname: string,
  }

  const showFullname = ({ name, surname, ...rest }: Person): Fullname => ({
    ...rest,
    fullname: name + ' ' + surname
  })

  const fullnamePerson: Fullname[] = people.map(showFullname);

  console.table(people);
  console.table(fullnamePerson);
}
console.groupEnd();