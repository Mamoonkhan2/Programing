// let date = new Date(2025,10,17);
let date = new Date(2025,11,17,10,21);

console.log(date.toString());   //Mon Nov 17 2025 19:28:16 GMT+0500 (Pakistan Standard Time)
console.log(date.toDateString());// Mon Nov 17 2025
console.log(date.toLocaleString('default',{ weekday:'long',timeZoneName:'long'})); // 11/17/2025
console.log(date.toLocaleTimeString());// 10:21:00 AM

let timestamp =new Date();
console.log(timestamp.getTime().toLocaleString());// will give utc from 1 january 1970
console.log(timestamp.getSeconds());

console.log(`today ${timestamp.getDay()} and month is ${timestamp.getMonth()} and year is ${timestamp.getFullYear()} `);

