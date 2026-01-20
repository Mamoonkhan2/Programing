// infrence mean typescript will assign the data type to it
let name = "mamoonkhan";
let age  = 18;

// name = 23;// not assigneble becase it is string

let anyDataType : any;

anyDataType = "mamoonkhan";
anyDataType = 2;
anyDataType = true;
anyDataType = {};
anyDataType.toUpperCase();

let unknownDatatype : unknown;
unknownDatatype = "string";
unknownDatatype = true;
unknownDatatype = {};
unknownDatatype = 234;

// now it will show when using some methood so will allow us to do narrowing
if(typeof unknownDatatype === 'string') unknownDatatype.toUpperCase();// unknown will allow us to do the naroowing with the type

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