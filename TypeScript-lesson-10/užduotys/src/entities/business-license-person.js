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
class BuisnessLicencePerson extends employee_js_1.default {
    constructor(_a) {
        var { jobs = [] } = _a, personProps = __rest(_a, ["jobs"]);
        super(personProps);
        this.calcPay = () => {
            const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
            this.jobs.forEach((job) => job.setJobPayed());
            const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
            return calculatedPay;
        };
        this.jobs = jobs;
    }
    toString() {
        const { jobs } = this;
        let result = this.getPersonInfo() + (0, format_line_js_1.default)(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
exports.default = BuisnessLicencePerson;
