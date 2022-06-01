"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_js_1 = __importDefault(require("./employee.js"));
const format_line_js_1 = __importDefault(require("../helpers/format-line.js"));
const calc_month_work_days_js_1 = __importDefault(require("../helpers/calc-month-work-days.js"));
class WorkPerson extends employee_js_1.default {
    constructor(_a) {
        var { hourPay, fullTimeEquivalent } = _a, personProps = __rest(_a, ["hourPay", "fullTimeEquivalent"]);
        super(personProps);
        this.calcPay = () => (0, calc_month_work_days_js_1.default)() * this.hourPay * this.fullTimeEquivalent * 8;
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    toString() {
        return `${this.getPersonInfo()
            + (0, format_line_js_1.default)(`hour pay: ${this.hourPay}`, 1)
            + (0, format_line_js_1.default)(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
exports.default = WorkPerson;
