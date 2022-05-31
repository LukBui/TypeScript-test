type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

console.group('Assertions - užduotys');
{
 
  type Event = (e: MouseEvent) => void;
  
  const button: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;
  

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const printText: Event = () => console.log('Papausta!');

    button.addEventListener('click', printText);
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const square: HTMLDivElement = document.querySelector('#square') as HTMLDivElement;
    const addSquare: Event = () => {
      const littleSquare: HTMLSpanElement = document.createElement('span');
      littleSquare.className = 'sq';
      square.append(littleSquare);
    }

    button.addEventListener('click', addSquare);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    const countContainer: HTMLParagraphElement = document.querySelector('#counting') as HTMLParagraphElement;

    let squareCount: number = 0;
    const squareCounter: Event = () => {
      squareCount++;
      countContainer.innerHTML = `Kvadratėlių skaičius: ${squareCount}`;
    }

    button.addEventListener('click', squareCounter);
  }
  console.groupEnd();

}
console.groupEnd();