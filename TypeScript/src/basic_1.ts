// first of all the ts will asign the type auto when we did't give it to 
let name = "mamoonkhan";
let age  = 123;
// but when we try to assign new type of varibale to it'll show error
// name = 234 Error(Type 'number' is not assignable to type 'string')
// it is because of the type is assign string and we can't give it number to it
// so we are only allow to give a string to the string data type
// name = "someString";

// it also the same for the age:number  and if we try to give value which a string or anything
// age = "asdflj" will show the errro(Type 'string' is not assignable to type 'number')  as like string 
// we can't change a number to the string or boolean
// age = true; it will show an error

// the type annotation simply mean that we give a type to a varibale mannually so that the tsc checker did't
// not give it infrence we annotatet it
// let variable : <type> = value -> type annotation
let anotherName : string = "mamoonkhan";
let anotherAge : number = 19;
let isMale : boolean = true;
let working : undefined = undefined;