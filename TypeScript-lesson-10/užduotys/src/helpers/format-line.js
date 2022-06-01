"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatLine = (text, indent = 0) => `${('\t').repeat(indent) + text}\n`;
exports.default = formatLine;
