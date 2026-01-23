// infrence mean typescript will assign the data type to it
type n = number ;
type s = string ;
type b = boolean;

let name = "mamoonkhan";
let age  = 18;

// name = 23;// not assigneble becase it is string

// any 
let anyDataType : any;

anyDataType = "mamoonkhan";
anyDataType = 2;
anyDataType = true;
anyDataType = {};

// anyDataType.toUpperCase();

// unknown 

let unknownDatatype : unknown;
unknownDatatype = "string";
unknownDatatype = true;
unknownDatatype = {};
unknownDatatype = 234;

// now it will show when using some methood so will allow us to do narrowing

if(typeof unknownDatatype === 'string') 
    unknownDatatype.toUpperCase();// unknown will allow us to do the naroowing with the type

// type annotation
// annotate -> we explictly defined it manulaly

let number : number = 18;
let customerName : string = "mamoonkhan";
let notDecideNow : undefined;

// obj

let userObj : {username:string,age:number}; 
let DataObj = {
    userName : "mammoonkhan",
    age : 20
}

// refrence the ts compiler give it a type number

let a = 12; 
let obj = {
    name:"mamonkhan",
}

// anotation is when we define the datatype

//  V:Dtype  = value; --> anotation     
// we annotate and give data type to the variable so that the ts compiler do not give to it 

let b: number = 12;
let anotherObj : {name:string,age:number}={
    name :"mamoonkhan",
    age:15
}

// arrays 

let array = [1,2,3,4,'s']; 
let numArray :      number[] = [1,2,3,4,5];
let stringArray :   string[] = ["heros","heros","heros","heros"];
let booleanArray : boolean[] = [true,true,true,true]; 

// some union 

let mixArray :  (string | number)[] = [1,2,3,4,"name"];
let mixArrObj : (number | object)[] = [1,2,3,4,{name:'mamonkhan'}];



// enums

enum UserRules{
    ADMIN = 'admin',
    GUEST = 'guest',
}
console.log(UserRules.ADMIN)

// tuples

let tuples : [string,number] = ["mamoonkhan",19];

// function

function Anothrename():void {
    console.log("nothing is returning");
}

function name2():string {
    console.log("retruning String");
    return `string is returning`
}

// function name3():never {
//     console.log("retruning String");
// }
// name3()

console.log('not working because of never used in function before');


// interface is defineing the sturucture of obj
// how will be the given obj look like it properties and methood look like
// ? mean it is optional
interface UserData{
    name:string,
    age:number,
    password?:string|number,
    src?:string;
}

function userData(userData:UserData) {
    console.log(userData.age);
}

userData({name:"mamoonkhan",age:15})

// extanding interface or inheretance in basic js

interface Client{
    name?:string,
    age?:number
}

// inharte admin

interface Admin extends Client{
    
    admin:boolean,
}

// making two interfaces 

// when defineing two interfaces it merge in one interface
// 1 -> 1+2 so 
// interface Abcd {name:string,email:string}
interface Abcd{ // -> 1
    name:string,
}
interface Abcd{ // -> 2
    email:string,
}

function Handle(Users:Abcd) {
   console.log(Users.name);
}

Handle({email:"mamon@gmail.com",name:'mamonkhan'});

// type alies we can give alieses to the type 
type Inse = number; 
let anotherAge: Inse = 132;

// we use it in the sense when it the union type become ugly
// let number : string | number | null | undefined ; // --> so ugly so will use the alies
type values =  string | number | null | undefined ;
let value: values;
value = null;
console.log(value);

// classes 

class cars {
    constructor(public name:string,public tairSize:number){}
    gretting():string {
        return `hello your car model ${this.name}`
    }
    ValueOfThis(){
        return this.name
    }

}
let Marcadies = new cars("marcedes",54);
console.log(Marcadies.ValueOfThis());
