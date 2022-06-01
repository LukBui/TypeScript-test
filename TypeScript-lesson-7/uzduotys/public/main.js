"use strict";
// 1.
class List {
    // 2.
    constructor(initialNode) {
        this.addFirstElement = (node) => {
            this.head = node;
            this.tail = node;
        };
        // 3.
        this.addNodeStart = (node) => {
            if (this.head === null) {
                this.addFirstElement(node);
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        };
        // 4.
        this.addNodeEnd = (node) => {
            if (this.tail === null) {
                this.addFirstElement(node);
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
        };
        // 5.
        this.forEach = (callback) => {
            if (this.head === null)
                return;
            let currentNode = this.head;
            while (true) {
                callback(currentNode.data);
                if (currentNode.next === null)
                    break;
                currentNode = currentNode.next;
            }
        };
        if (initialNode !== undefined) {
            this.head = initialNode;
            this.tail = initialNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
}
const stringNode1 = { data: 'Yra', next: null };
const stringNode2 = { data: 'KaipYra', next: stringNode1 };
const stringList = new List();
const numberNode = { data: 5, next: null };
const numberList = new List(numberNode);
const stringNodeToAdd1 = { data: 'Nimokamai', next: null };
const stringNodeToAdd2 = { data: 'Hmm', next: null };
const stringNodeToAdd3 = { data: 'Aaa', next: null };
const numberNodeToAdd1 = { data: 1, next: null };
const numberNodeToAdd2 = { data: 2, next: null };
const numberNodeToAdd3 = { data: 3, next: null };
console.group('1. Sukurkite sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    console.log({
        listNode1: stringNode1,
        listNode2: stringNode2,
    });
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
    console.log('Empty string');
    console.log(stringList);
    console.log('Number');
    console.log(numberList);
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
    console.log('String');
    console.log(stringList);
    console.log('Node 1', stringNodeToAdd1);
    stringList.addNodeStart(stringNodeToAdd1);
    console.log('List', Object.assign({}, stringList));
    console.log('Node 2', stringNodeToAdd2);
    stringList.addNodeStart(stringNodeToAdd2);
    console.log('List', Object.assign({}, stringList));
    console.log('Node 3', stringNodeToAdd3);
    stringList.addNodeStart(stringNodeToAdd3);
    console.log('List', Object.assign({}, stringList));
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
    console.log('String');
    console.log(numberList);
    console.log('Node 1', numberNodeToAdd1);
    numberList.addNodeEnd(numberNodeToAdd1);
    console.log('List', Object.assign({}, numberList));
    console.log('Node 2', numberNodeToAdd2);
    numberList.addNodeEnd(numberNodeToAdd2);
    console.log('List', Object.assign({}, numberList));
    console.log('Node 3', numberNodeToAdd3);
    numberList.addNodeEnd(numberNodeToAdd3);
    console.log('List', Object.assign({}, numberList));
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
    console.log('String');
    stringList.forEach((str) => console.log(str));
    const stringArr = [];
    const putInStringArr = (x) => {
        stringArr.push(String(x));
    };
    console.log('Number');
    numberList.forEach(putInStringArr);
    const numberListStringRepresentation = stringArr.join(' → ');
    console.log(numberListStringRepresentation);
}
console.groupEnd();
