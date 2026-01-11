// scope in js is important 
// var is like a global scope varible if decleard in block then it is also avali.. in glob.. sco..
// var a = 999; // if we declared it in GS it can also be acces by BS and can be change from there
let b = 999;
let c = 999;

if (true) 

{
    // blocke scope 
    // var a = 555;  // it is also using in global scope --> 1BS
    let b = 555;
    let c = 555;
    c= 3;
    // console.log("INNER : ",a);
    console.log("INNER : ",b);
    console.log("INNER : ",c);
    
}

// console.log("OUTER : ",a);
console.log("OUTER : ",b);
console.log("OUTER : ",c);

function one() {// parent
    let username = "mamoon";
    function Two() {
        let website = "fuckingSite";
        console.log(username+website);
    }
    // console.log(website);// will throw an erro website not defiened in this scope becace we are assuming that the website it the child scope var.. so we are not allow to ax.. that scope
    Two()
}
one()




// simple function of js 
// so the this function can be call from anywhere in the global scope 

console.log(AddOne(3));
function AddOne(num) {
    return num+1;
}

// variable function 
// varible can hold anything in js obj.. functi.. ar... etc....

const AddTwo = function(num){
    return num+2;
}
console.log(AddTwo(4));


