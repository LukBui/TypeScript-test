type Id = number | string;
const id1: Id = '1321354';
const id2: Id = 17;

const id3: number | string = 47;
const id4: number | string = 'asdasdas';

const id5: number | string | boolean = 47;
const id6: number | string | boolean = 'sdfsdfdsfsdf';
const id7: number | string | boolean = true;


type User = {
  name: string,
  surname: string,
  email: string,
  role: 'ADMIN' | 'USER' | 'MODERATOR',
  mobile: string,
};

type Employee = {
  id: number | string,
  name: string,
  surname: string,
  position: 'Janitor' | 'CTO' | 'Programmer',
};

type Call = (callee: User | string) => void;

const call: Call = (callee) => {
  if (typeof callee === 'string') {
    console.log('Skambinama:', callee);
  } else {
    console.log('Skambinama:', callee.mobile);
  }
}

const data1: Array<number | string> = [1, 5, 'burundukas', 8, 'siurprizas', 7];

const data2: (number | string)[] = [1, 5, 'burundukas', 8, 'siurprizas', 7];

type FlagOptions = (1 | 0)[] | boolean[];

const flags1: FlagOptions = [1, 1, 0, 0, 0, 1, 1];
const flags2: FlagOptions = [true, false, false, true, true];


console.group('Union operators - užduotys');
{

  type Accommodation = {
    type: 'House' | 'Flat',
    address: string,
  };
  type Car = {
    brand: string,
    model: string,
    transmission: 'Automatic' | 'Manual',
  };

  type Assets = Accommodation[] | Car[];


  console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
  {
    const accommodation1: Accommodation = {
      address: 'Stepono 20',
      type: 'House',
    };
    const accommodation2: Accommodation = {
      address: 'Algirdo 90',
      type: 'Flat',
    };

    console.log({
      accommodation1,
      accommodation2,
    })
  }
  console.groupEnd();

  console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
  {
    const car1: Car = {
      brand: 'Audi',
      model: 'RS7',
      transmission: 'Automatic',
    };
    const car2: Car = {
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
    const assets1: Assets = [{
      address: 'Stepono 20',
      type: 'House',
    }, {
      address: 'Algirdo 90',
      type: 'Flat',
    }];
    const assets2: Assets = [{
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