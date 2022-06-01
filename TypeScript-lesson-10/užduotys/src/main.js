"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const work_person_js_1 = __importDefault(require("./entities/work-person.js"));
const self_employed_person_js_1 = __importDefault(require("./entities/self-employed-person.js"));
const business_license_person_js_1 = __importDefault(require("./entities/business-license-person.js"));
const job_js_1 = __importDefault(require("./entities/job.js"));
const backendDeveloper = new work_person_js_1.default({
    id: '25169845878',
    name: 'Apsas',
    surname: 'Revestenis',
    hourPay: 25,
    fullTimeEquivalent: 1,
});
const frontendDeveloper = new work_person_js_1.default({
    id: '25167745878',
    name: 'Eventas',
    surname: 'Klikauskas',
    hourPay: 25,
    fullTimeEquivalent: 0.5,
});
const selfEmployed1 = new self_employed_person_js_1.default({
    id: '25169845878',
    name: 'Beribė',
    surname: 'Jūračka',
    hourPay: 25,
    hoursWorked: 10,
});
const selfEmployed2 = new self_employed_person_js_1.default({
    id: '25169145878',
    name: 'Fanalijus',
    surname: 'Analijus',
    hourPay: 10,
});
const designer = new business_license_person_js_1.default({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
});
const jobs = [
    new job_js_1.default('Facebook adds', 200),
    new job_js_1.default('Google adds', 700),
    new job_js_1.default('Twitter adds', 400),
];
jobs[0].completeJob();
jobs[2].completeJob();
const marketingSpecialist = new business_license_person_js_1.default({
    id: '15169845878',
    name: 'Protenis',
    surname: 'Knistauskenis',
    jobs,
});
const employees = [
    backendDeveloper,
    frontendDeveloper,
    selfEmployed1,
    selfEmployed2,
    designer,
    marketingSpecialist,
];
console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();
console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
    console.log(emp.getPersonInfo());
    console.log(emp.calcPay());
});
console.groupEnd();
