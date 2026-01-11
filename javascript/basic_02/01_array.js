let array = [1,2,3,4,5];

console.log(array);

// also use indexing from 0 to ---

console.log(array[0]);
array.push(1)
console.log(array);
array.pop()
array.pop()
console.log(array);

// add to the start of the array and remove from the start of the array
// note : that the value will shit by one or so on

array.unshift(0) // [ 0 -> at the start of the array , 1, 2, 3, 4 ]
array.shift()    // will remove form the start of the array
console.log(array);

// some question about value in js
// fuck you c++ that is way it look hard to now not a problem long to explain

console.log(array.includes(1)); // if a value -> true or -> false
console.log(array.indexOf(3));  // give the index of the value

// convert from array to string
// we also store the funtion/methood in a variable if want
let StringArray = array.join();
console.log(StringArray);
console.log(typeof StringArray);

// slice give a part of array

let array2 = [0,1,2,3,4,5]
console.log("slice array or part of array -> ",array2.slice(0,3)); // last will not include
console.log("orignal array -> ",array2);

// splice remove a section of the array

let spliceMethoodRemoveArray = array2.splice(0,3)
console.log("splice which remove the section of the array --> ",spliceMethoodRemoveArray);
console.log("the array after splice -> ",array2);






