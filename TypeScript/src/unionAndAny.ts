let name : string = "mamoonkhan";
let moneyHold : string | number = 21; // either string or number
let requests:'pending' | 'succses' | 'error' ;
requests = 'pending';
let data:unknown;

data = 21;
data = "stering";
data = true;
if(typeof data ==='string'){
    data.toUpperCase()
}
let array:string[]= ["1","2","3","5"];
let getValue:string|undefined|number; 
// --> edge cases like it can be undefiened while it going through flow program [loop,condistoinal] 
// so union help us to handle edge casses like it is string but if there is no assigned vlaue to it it will be undefiend


for (const value of array) {
    if(value == '2'){
        getValue = value;
    }
}

console.log(getValue);
