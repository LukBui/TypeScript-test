"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor({ id, name, surname }) {
        this.getPersonInfo = () => `${this.name} ${this.surname}, asm. kodas: ${this.id}:\n`;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
exports.default = Person;
