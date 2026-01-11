// basic comparision
console.log(1==1);// --> true
console.log(1!=1);// --> false
console.log(2>=2);// --> true
console.log(2<=2);// --> true

// js automatically convert the string to the number

console.log("2" > 1);  // "2" --> 2 > 1 | true
console.log("02" > 1); // "02" --> 02 >1| true
        // it first convert at in the number
        
// null and undefiend comparisoin
// boolean(null) = 0

console.log(null == 0);
console.log(null >= 0) // it convert the data type in to number so null = 0 >= 0 | true
console.log(null <= 0) // also for this case

// for the below it all will give fasle becasue the undefined in boolean and number is nan 
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined < 0);
console.log(undefined > 0);

// (===) --> strictly check the datatype with number

console.log("2" === 2);
console.log(2 === 2);





