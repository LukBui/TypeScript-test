"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const format_line_js_1 = __importDefault(require("../helpers/format-line.js"));
class Job {
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        this.finished = false;
        this.payed = false;
        this.completeJob = () => {
            this.finished = true;
            this.dateFinished = new Date();
        };
        this.setJobPayed = () => {
            this.payed = true;
        };
        this.getPay = () => this.pay;
        this.isFinished = () => this.finished;
        this.isPayed = () => this.payed;
        this.toString = () => {
            const { id, title, finished, pay, dateFinished, payed, } = this;
            return (0, format_line_js_1.default)(`id: ${id}`, 2)
                + (0, format_line_js_1.default)(`title: ${title}`, 2)
                + (0, format_line_js_1.default)(`pay: ${pay}`, 2)
                + (finished ? (0, format_line_js_1.default)(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
                + (payed ? (0, format_line_js_1.default)(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
                + (dateFinished ? (0, format_line_js_1.default)(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
        };
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
}
Job.instanceCount = 0;
exports.default = Job;
