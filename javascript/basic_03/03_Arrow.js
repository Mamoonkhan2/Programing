// ES6 update 2015 


// Arrow function
let a = "";
// console.log(Boolean(a))

// this keyword

// this basicaly use the curent contex of the object or block scope 
// after this.mean that we are now talking about the parent scope 
// this is use in current contex current scope
let user = {
    name :"haroon",
    age  : 23,
    messege : function(){
        // console.log(`${this.name} , age is ${this.age}`);
        console.log(this);
    }
}
// user.messege();
// user.name = "mamoon";
// user.age  = 20;
// user.messege();

// this don't work in the function
// function Name() {
//     let username = "alfj"
//     console.log(this.username);
// }
// Name();

// arrow function
// this is also not avalible for arrow function 
// return an empty object

const ThisArrow = () => {
    console.log(this);
}

ThisArrow();

const addTwo = (num,num2)=>{
    return num+num2;
}
console.log(addTwo(1,2));

// implictly return function

const addOne = (num1,num2) => console.log("numbers_fucking");

// const addOne = (num1,num2) => (num1 + num2)
// console.log(addOne(1,2)) 

// IIFE =>  ( Imeditly Invoked Functoin Expression )
// (Definition)(Exicution)
(
    ()=>{
    console.log("hello world Arrow functon");
    }
)();
(
    function (){
        console.log("hello world Simple function");
    }
)();
(
    function (num) {
        return console.log('Function with parameters =>> ',num)
    }
)(1);
(
    (num)=> console.log('implectly return arrow function --> ',num+1)
)(1)