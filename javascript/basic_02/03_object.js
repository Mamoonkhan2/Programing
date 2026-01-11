// object letral
const uniqueKey = Symbol("uniques");
let JsUser = {
    "name" : "mamoon",
    // uniqueKey:"hi it me",// we can't use the Symbol like this type will be string not symbol
    [uniqueKey]:"hi it me",// instead will use like this no type is unique
    age  : 19,
    hello:function (){
        console.log(`heloo ${this.name}`);
        
    },
}

// changeing value

JsUser.name = "haroon";
JsUser.age = 23;
JsUser['age'] = 23;
JsUser['name'] = "haroon";

//output ways
// fist 
// some value can't be acces through this methood like is the key is string with spaces
console.log(JsUser.age);
console.log(JsUser.name);
// console.log(JsUser.uniqueKey); // if we take a typeof with it will give a string for it instead we will use
console.log("Calling Symbol -> ",JsUser[uniqueKey]); // with no string_notation because it is unique/symbol not string/etc 




// secound

console.log(JsUser['age']);
console.log(JsUser['name']);
console.log("Calling Symbol -> ",JsUser[uniqueKey]);

// object funtion
// we will call the function first then will tell the function to do something with that object
// function inside the object is possible in js

JsUser.greeting = function (){console.log("hello world")};
console.log(JsUser.greeting()); // with out () will show function anonymous because of scop
JsUser.greetingTwo = function (){console.log(`my name is ${this.name} and age is ${this.age}`)}// we are using this because the function is in the same scope so the variable are glbal in that scope we can use that any where
console.log(JsUser.greetingTwo());

// change the value useing funtion 
JsUser.ChangeValues = function (name,age){
    this.name = name;
    this.age = age;
}
JsUser.ChangeValues("mamoon",21);
console.log(JsUser);

// freezeing the object 
// freeze after frezing the object we can't modify it like ->
Object.freeze(JsUser);
JsUser.age = 12;
JsUser['hhhh'] = "asldj"; // aslo can't add

// console.log(JsUser); // { name: 'haroon', age: 23, [Symbol(uniques)]: 'hi it me' } symbol sign will change from normal key which is treated like a string






