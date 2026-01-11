let string = new String('hello world');
let number = new Number(100);
let Lnumber = 100.1234123;
let Lstring = "loa";

// console.log(Lnumber.toString().length);// first convert in to string then given string properties
// tofixed will show the value after decimal like .12345
// console.log(Lnumber.toFixed(5));

// to round up
let presicionvalue = 123.9; 
// console.log(presicionvalue.toPrecision(3)); // it will focus on 123 after . 9 so it will updated to 124

// to convert the value in standerd

let standardnumber = 1000000;
// console.log(standardnumber.toLocaleString('ur-Pk',{
//     style:'currency',
//     currency:'PKR',
//     currencyDisplay:'symbol'
// }));

// ++++++++++++++++++++++++++++++++++++++++++++++++++Mathimatics++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let anumber = 1111;
// console.log(Math.abs(-1));
// console.log(Math.round(5.4));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));

console.log(Math.random());  // 0 ----- 1
console.log(Math.random()*5);// 0 ----- 5
console.log((Math.random()*5)+1);// 1 ----- 5
console.log((Math.random()*10)+1);// 6 ----- 10

let min = 10;
let max = 20;

console.log(Math.floor((Math.random() * (max-min+1)) + min));
