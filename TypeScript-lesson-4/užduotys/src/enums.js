"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
    // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
    let LithuanianCity;
    (function (LithuanianCity) {
        LithuanianCity["Vilnius"] = "Vilnius";
        LithuanianCity["Kaunas"] = "Kaunas";
        LithuanianCity["Klaipeda"] = "Klaipeda";
        LithuanianCity["Siauliai"] = "Siauliai";
        LithuanianCity["Panevezys"] = "Panevezys";
    })(LithuanianCity || (LithuanianCity = {}));
    ;
    let LargestCountries;
    (function (LargestCountries) {
        LargestCountries[LargestCountries["China"] = 0] = "China";
        LargestCountries[LargestCountries["India"] = 1] = "India";
        LargestCountries[LargestCountries["UnitedStates"] = 2] = "UnitedStates";
        LargestCountries[LargestCountries["Indonesia"] = 3] = "Indonesia";
        LargestCountries[LargestCountries["Pakistan"] = 4] = "Pakistan";
    })(LargestCountries || (LargestCountries = {}));
    ;
    let StrongestEconomies;
    (function (StrongestEconomies) {
        StrongestEconomies[StrongestEconomies["UnitedStates"] = 0] = "UnitedStates";
        StrongestEconomies[StrongestEconomies["China"] = 1] = "China";
        StrongestEconomies[StrongestEconomies["Japan"] = 2] = "Japan";
        StrongestEconomies[StrongestEconomies["Germany"] = 3] = "Germany";
        StrongestEconomies[StrongestEconomies["UnitedKingdom"] = 4] = "UnitedKingdom";
    })(StrongestEconomies || (StrongestEconomies = {}));
    ;
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const city1 = LithuanianCity.Vilnius;
        console.log(city1);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const largestCountries = [LargestCountries.China, LargestCountries.UnitedStates];
        console.log(largestCountries);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const strongestEconomies = [
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
