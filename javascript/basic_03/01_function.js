// function is use to make code readble and clean 
// and reuseble for everyone
function greeting () {
    console.log("hello world");
}
s
greeting();
// using function to add two number
function addTwoValue(number1,number2){ // function with parameter
    console.log(number1+number2);
}
// calling a function passing aurgument
addTwoValue(1,1);

function Time(parameters) {
    let date = new Date();
    console.log(`today is ${date.getDate()} and winter sesion `);
    console.log(`${date.toLocaleString('default',{weekday:'long',year:'2-digit',month:'long',timeZoneName:'shortOffset'} )}`);
}
Time();

function ReturnValue (number,number1) {
    return number + number1;
}
let Result = ReturnValue(1,2);
console.log(Result);

function LogedInValue(username) {
    return `${username} Just signed`;
}

console.log(LogedInValue("mamoonkhan"));

let Recive = LogedInValue("mamoonkhan");
console.log(Recive);

function Ok(username = "mamoon"){ // by default value
    if (username === undefined) {
        console.log("please enter the name");
        return;
    }
    // if (!username) {
    //     console.log("please enter the name");
    //     return;
    // }
    return `${username} Just signed`;
}
console.log(Ok());


function CartNum(num) {
    return num;
}

console.log(CartNum(1,2,3));// will only give becace we are takeing only one parameter in function

function ReatOPerater(...val) { // so mean that the rest of the value will store in the array
    return val;
}

console.log(ReatOPerater(1,2,3,34,4,5,5));

function WithVariable(val1,val2,...val3) { // we can also use it with the varble val1 go here val2 go here and the rest go to the val3
    return val3;
}

console.log(WithVariable(1,2,3,4)); //val1 = 1,val2 = 2 val3 = [3,4,....rest of the value want to insert into];

let user = {
    username : "mamoon",
    price    : 199,
}

function ObjectBasic(AnyObject) {
    console.log(`hello ${AnyObject.username} the price is : ${AnyObject.price}`);
}
// ObjectBasic(user);

ObjectBasic
(
    {
        username:"mamoonkhan",
        price:250
    }
)


function ObjectDestructuringHandler({username:s,price:p}) { // so mean {{username:s,price:p}} = user
    console.log(`username is ${s} and price is ${p}`);
}

ObjectDestructuringHandler(user);

let collectionStar = [
    {
        name:"mamoonkhan",
        age :12
    }
,{
        name:"mamoonkhan",
        age :12
    }
        ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }
    ,{
        name:"mamoonkhan",
        age :12
    }

]

function ArrayHandler(array) {
    array.forEach(element => {
        console.log(element.name);
    })
}
ArrayHandler(collectionStar)