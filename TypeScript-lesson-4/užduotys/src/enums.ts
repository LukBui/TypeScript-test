enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
};

enum Answer {
  No, // 0
  Yes, // 1
};

enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LithuanianCity {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Panevezys = 'Panevezys',
  };

  enum LargestCountries {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  };

  enum StrongestEconomies {
    UnitedStates,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  };
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    const city1: LithuanianCity = LithuanianCity.Vilnius;

    console.log(city1);
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const largestCountries: LargestCountries[] = [LargestCountries.China, LargestCountries.UnitedStates];

    console.log(largestCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const strongestEconomies: StrongestEconomies[] = [
      StrongestEconomies.UnitedStates,
      StrongestEconomies.China,
      StrongestEconomies.Japan,
      StrongestEconomies.Germany,
      StrongestEconomies.UnitedKingdom,
    ];

    console.log(strongestEconomies);
  }
  console.groupEnd();

}
console.groupEnd();