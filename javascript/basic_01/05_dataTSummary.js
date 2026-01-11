

// Premetive  dataTypes
// call by value mean when we call it's not a orignal value it a copy of its

// 7 | -->  String , Number , Boolean , Symbol , BigInt , null , undefined

// Symbol
// will store the value uniquely

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId);

// BigInt

let bigN = 3242342431342n
console.log(typeof bigN);

// null

let nothing = null
console.log(typeof nothing);

//undefined

let notSure = undefined;
console.log(typeof notSure);

// ::::::::::::::::::::::::|||||||||||||||||::::::::::::::::::::::::
// Refrence(non-Premetive)
// when we call it we call the orignal value from mamory not a copy of its

// Array , Object , Function

// Array 

let heros = ["alqaqa bin amar al tamimi","khalid bin walid","Amr bin alas"];
console.log(typeof heros) // object

// function

function myfunction(){
    console.log("hello function");
}

console.log(typeof myfunction); // object function

// object

let stroage = {
    ram  : 45,
    name :"mamon"
}

console.log(typeof stroage); // object


// Stack(premitive)
// it give a copy of the varable

// Heap(Non-premitive)
// give the orignal varibale