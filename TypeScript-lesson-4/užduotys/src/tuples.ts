type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

console.group('Tuples - užduotys');
{
 
  type PersonTuple = [string, number];
  type Dog = {
    name: string,
    age: number,
    breed: 'Labradoodle' | 'German Shepard',
  };
  type Person = {
    name: string,
    age: number,
  };
  type PersonDogTuple = [Person, Dog];
  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];
 

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person1: PersonTuple = ['Kestas', 100];
    const person2: PersonTuple = ['Petras', 47];

    console.log(person1, person2);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const persondog: PersonDogTuple = [{
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
    const triangle: TriangleTuple = [[-1, 1], [-2, 2], [-3, 3]];

    console.log({
      triangle,
    });
  }
  console.groupEnd();

}
console.groupEnd();