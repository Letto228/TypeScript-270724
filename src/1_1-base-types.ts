// let variable: type = value;

// let isTrue: boolean = true;

// boolean
let isTrue: boolean;

isTrue = false;
isTrue = true;

// isTrue = '';
// isTrue = 234;
// isTrue = {};

// number
let numberVar: number = 123;
let float: number = 123.456;
let binary: number = 0b101;

// bigint
let bigNumber: bigint = 100n;

// bigNumber = 123;

// let num: number = 100n

// string
let str: string = 'string, Hello';

str = '';
// str = {};

// undefined
let undefinedVar: undefined = undefined;

// undefinedVar = null;

// null
let nullVar: null = null;

// object

// let objectVar: object = {};
let objectVar: {a: string, b?: string, readonly c: {d: boolean}} = {a: '', c: {d: true}};

// objectVar.c.d = '';
// objectVar.a = '13';
// objectVar.c

objectVar.c.d = false;

// array

// let arrayVar: number[][][] = [[1], [2], [3]];

// let tuple: [string, number, {a: boolean}] = ['', 1, {a: true}];

// tuple[2] = {a: false}

// function

function calculate(a: number, b: number): number {
    return a + b;
}

const sum = (a: number, b: number): number => {
    return a + b;
}

calculate(123, 321);
sum(123, 321);

// function invoke(cb: (a: number, b: number) => number) {
//     // let result: string = cb(123, 321);
//     cb(123, 321);
// }

// invoke(sum);
// invoke(calculate);

function invoke(cb: (a: number, b: number) => void) {
    cb(123, 321);
}

invoke((a: number, b: number) => {});

// function bar(this: {smth: number}) {
//     bar.smth = 1;
// }

// any

// let anyVar: any;

// anyVar = 123;
// anyVar = '123';
// anyVar = {};
// anyVar = null;

// anyVar.a

// unknown
// let unknownVar: unknown = {a: ''};

// unknownVar = 123;

// let numberVar1: number = unknownVar;

// unknownVar.a

// Литеральные типы and union

let fontWeight: 'bold' | 500 | 600 = 'bold';

fontWeight = 500;
// fontWeight = 700;

let trueVar: true = true;

let numberOrStringVar: number | string = '';

function getProperty(
    obj: {a: string; d: string} | {b: boolean, d: string},
) {
    obj.d
}

getProperty({a: '', d: ''})
getProperty({b: true, d: ''})

function calculateButtonSize(size: 's' | 'm' | 'l') {}

calculateButtonSize('s');

// intersection

// let testVar: number & string

// let testObjVar: {a: string} & {b: string} = {
//     a: 'test',
//     b: 'name',
// }

// let testObjVar: {a: string, d: string} & {b: string, d: number | string} = {
//     a: 'test',
//     b: 'name',
//     d: 'other',
// }

let testObjVar: {a: string, d: {c: string}} & {b: string, d: {c: string | number}} = {
    a: 'test',
    b: 'name',
    d: {
        c: 'str'
    }
}

// {title: string; duration: number} & {seasonCount: number} = {title: string; duration: number, seasonCount: number}
