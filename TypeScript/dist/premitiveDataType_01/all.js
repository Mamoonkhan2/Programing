"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "mamoonkhan";
let age = 18;
// name = 23;// not assigneble becase it is string
// any 
let anyDataType;
anyDataType = "mamoonkhan";
anyDataType = 2;
anyDataType = true;
anyDataType = {};
// anyDataType.toUpperCase();
// unknown 
let unknownDatatype;
unknownDatatype = "string";
unknownDatatype = true;
unknownDatatype = {};
unknownDatatype = 234;
// now it will show when using some methood so will allow us to do narrowing
if (typeof unknownDatatype === 'string')
    unknownDatatype.toUpperCase(); // unknown will allow us to do the naroowing with the type
// type annotation
// annotate -> we explictly defined it manulaly
let number = 18;
let customerName = "mamoonkhan";
let notDecideNow;
// obj
let userObj;
let DataObj = {
    userName: "mammoonkhan",
    age: 20
};
// refrence the ts compiler give it a type number
let a = 12;
let obj = {
    name: "mamonkhan",
};
// anotation is when we define the datatype
//  V:Dtype  = value; --> anotation     
// we annotate and give data type to the variable so that the ts compiler do not give to it 
let b = 12;
let anotherObj = {
    name: "mamoonkhan",
    age: 15
};
// arrays 
let array = [1, 2, 3, 4, 's'];
let numArray = [1, 2, 3, 4, 5];
let stringArray = ["heros", "heros", "heros", "heros"];
let booleanArray = [true, true, true, true];
// some union 
let mixArray = [1, 2, 3, 4, "name"];
let mixArrObj = [1, 2, 3, 4, { name: 'mamonkhan' }];
// enums
var UserRules;
(function (UserRules) {
    UserRules["ADMIN"] = "admin";
    UserRules["GUEST"] = "guest";
})(UserRules || (UserRules = {}));
console.log(UserRules.ADMIN);
// tuples
let tuples = ["mamoonkhan", 19];
// function
function Anothrename() {
    console.log("nothing is returning");
}
function name2() {
    console.log("retruning String");
    return `string is returning`;
}
// function name3():never {
//     console.log("retruning String");
// }
// name3()
console.log('not working because of never used in function before');
function userData(userData) {
    console.log(userData.age);
}
userData({ name: "mamoonkhan", age: 15 });
function Handle(Users) {
    console.log(Users.name);
}
Handle({ email: "mamon@gmail.com", name: 'mamonkhan' });
let anotherAge = 132;
let value;
value = null;
console.log(value);
// classes 
class cars {
    name;
    tairSize;
    constructor(name, tairSize) {
        this.name = name;
        this.tairSize = tairSize;
    }
    gretting() {
        return `hello your car model ${this.name}`;
    }
    ValueOfThis() {
        return this.name;
    }
}
let Marcadies = new cars("marcedes", 54);
console.log(Marcadies.ValueOfThis());
//# sourceMappingURL=all.js.map