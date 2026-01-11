// singleton objects
// let user = new Object();
//object litreal

let user = {};

user.id = "123abc";
user.name = "mamoon";
user.IsLoggedIn = true;
user.greeting = function (){console.log("hello world")};

// console.log(user);

// object nesting

let regularUser = {
    id:"123abc",
    fullname: {
        userfullname:{
            firtname:"mamoon",
            lastname:"hussain ali",
        }
    }
}

let FullName = regularUser.fullname.userfullname;

// console.log(FullName.firtname);

// joining to object and assigning into other
// first like we do in array

let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c",4:"d"};

// let obj3 = {...obj1,...obj2};

let obj3 = Object.assign(obj1,obj1,obj2) // ({target it could be anything},object1 ,object2 ...) mean get everything from the objects and then add it in to one object
// obj1 === obj3


// array of objects

let ArrayObjects = [
    {
        id:1,
        name:'mamgoon'
    }    ,{
        id:1,
        name:'mamoon'
    }    ,{
        id:1,
        name:'mamoon'
    }    ,{
        id:1,
        name:'mamoon'
    }    ,{
        id:1,
        name:'mamoon'
    }    ,{
        id:1,
        name:'mamoon'
    }
]

// printing it 

ArrayObjects[1].id

// methood

console.log(Object.keys(obj3));
console.log(Object.values(obj3));

// distrucutreing the objects

let school = {
    SchoolName : "SSPS",
    TeacherName : "amir rawan sir",
    PrincipleName: "Pardul Khan",
}

// first 

school.SchoolName;
school['SchoolName'];

// secound
// so it make it easy not to write a traditional syantex of js
// can also make an alias for the {name:n} so n is alias for it
const {SchoolName} = school; // now it is clear coding or syntax of object distructuring
const {PrincipleName:p} = school; // can also use the alias for it
const {SchoolName:S,PrincipleName:P} = school; // multiple distructureing
console.log(SchoolName);
console.log(p);// calling by alias of the object key

[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]