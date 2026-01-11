// this a basic logic first is number and secound is string 
let score = 43;
let A_score = "33";

// now we will convert the value to the number and string
A_score = Number(A_score); // we conver the string value to the number

// now we convert the value and then store it in the other variable
let String_convertion = String(score);  // convert from number to string
let Number_convertion = Number(A_score);// convert from string to number

// printing the convertion
console.log(String_convertion);
console.log(Number_convertion);

// now we will see a converstion also the js error || convertion for not pure number will show nan

let FackNumber = "33abc";
// it will conver the value into number // we can directly conver it Facknumber = Number(Facknumber)
let convervalue = Number(FackNumber);
console.log(typeof FackNumber); // output => string
console.log(typeof convervalue);// convert => number
// but it will not show the number will show not a number(nan); because it is not a pure number
console.log(convervalue); 


// now convertion of the null || convertion will show type 0 and null
let nothing = null;
let stringconvertion = String(nothing) ;
let numberconvertion = Number(nothing) ;
let boolenconvertion = Boolean(nothing);
console.log( stringconvertion); // convert datatype -> null--string | null
console.log( numberconvertion); // convert datatype -> null--number | 0
console.log( boolenconvertion); // convert datatype -> null--boolen | false


// now convertoin of the undefined || 
let variable = undefined;
let changeV_S = String(variable);
let changeV_N = Number(variable);

console.log(changeV_S); // undefined -- string | undefined
console.log(changeV_N); // undefined -- number | NaN(not a number) 


// converstion of true and false

//convertion from number to boolean

let boolean = 1; // 0 -> false
let conversted = Boolean(boolean);
console.log(conversted);

// converstion from string to bollean

let st = "a"; // for empty string it will false and for string"ssaf" it wil be true
let converstedst = Boolean(st);
console.log(converstedst);

// string concatination 
let st1 = "how ";
let st2 ="you";
let st3 = st1 + st2;
console.log(st3);

// arthematic operater
console.log(2+1);   // addition
console.log(2-1);   // subtraction
console.log(2/2);   // divid
console.log(2**2);  // power
console.log(2%2);   // modelo

// primitive

let first   = 1 + "2";
let secound = "1" + 2;
let third   = 1 + 1 + "2";
let fourt   = '1' + 1 + 2;
let fifth   = 1 + 1 + '2' + 2 + 2;
console.table([first,secound,fifth,third,fourt]);

// prepost past post

// prepost
let x = 3;
let y = x++;
// x use ++ then update
console.log(`${x} ${y}`);

// postfix

let z = 3;
let k = ++z;
// ++ update z then use
console.log(`${z} ${k}`);

// variable declaration
// can declar many variable in js
let a,b,c,d;
a = b = c = d = 4;
console.log(`${a} ${b} ${c} ${d}`);

