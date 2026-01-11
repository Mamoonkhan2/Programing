// stinatring 
// concation

// old way

let name = "mamoonkhan ";
let word = 6;

console.log( name + word + " humm" );

// new way

let Aname = "mamoonkhan";
let also  = new String('mamoonkhan');
let Aword = 6;

console.log(Aname.substring(0,6));

// 0 1 2 3 4 5 6 7 8 9 .... 0 start from  0
//-9 -8-7-6-5-4-3-2-1 ..... - start from -1

console.log(Aname.slice(-8,6));
console.log(Aname.length);

// string mathood 

Aname.toUpperCase(); // convert to upercase
Aname.toLowerCase(); // convert to lowercase
Aname.charAt(4);    // to find the value of the index
Aname.indexOf('m'); // to find the postion of the character
Aname.length ;      // to find the lenght of the string

console.log(`my name is ${Aname} and word count is ${Aword} char at 4 ${Aname.charAt(5)}`);
console.log(Aname[5]);

// trim

let trimM = " mamoonkhan ";
console.log(trimM.trimStart());
console.log(trimM.trimEnd());
console.log(trimM.trim());

// replace and include(searching)

let replace = "https://mamoon khan";
console.log(replace.replace(' ',"%20"));
console.log(replace.includes("oo"));

// split will spilt the value into the string array

let split = "mamoon-khan-array-string";
console.log(split.split('-')); // it will split it basis on - this




