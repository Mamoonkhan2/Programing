let array = "hello"

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     for (let j = i; j < array.length; j++) {
//     }
// }

let i = 0;

// while(i!=array.length){
//     console.log(array[i++]);    
// } 

let StringArray = ["mamoon","haroon","amin"];

// for (let index = 0; index < StringArray.length; index++) {
//     const element = StringArray[index];
//     for (let j = 0; j < element.length; j++) {
//         const mm = element[j];
//         console.log(mm);
//     }    
//     console.log("_______________________");
    
    
// }

// StringArray.forEach(Element=>{
//         let mm = Array.from(Element);
//         mm.forEach(element=>{
//             console.log(element);
            
//         })
//         console.log("_____________________");
        
// })



// for of 


let obj = [ 
    {
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    },{
    name:"mamoon",
    age : 20     ,
    numbers : "fail",
    paper   : "physics"
    }
]

for (const element of obj) {
    // console.log(typeof element);
    
}

let number = [1,2,3,4,5,6];

for (const num of number) {
    // console.log(num);
}

let string = "hello world";

for (const char of string) {
    // console.log(char);
}
let basic = {
    name : 'mamoonkhan',
    age : 1
}
// object is not dirctly itrateble on for of loop
// map also store the key value pair a unique key value pair
// in input style

let map = new Map();

map.set('US','united state');
map.set("pak",'pakistan');
map.set("in","india");

// for of target the element
for (const [key,value] of map) {

    // console.log(key," :- ",value);    
}
// for in mosty target the key of the object not the element
for (const s in basic) {
    // console.log(basic[s]);
    
}
let arrays = ['js','py','cpp','java'];
for (const key in arrays) {
    // console.log(arrays[key]);
    
}

//For Each


Object.keys(basic).forEach(
    element=>{ // first will give the basic key and store it in element then onby one it will output that
        // console.log(basic[element]);
    }
)

arrays.forEach
(
    // we can also make anthor function to go throug for every value or we directly use function here
    //  element
    // (element ,index, array)
    (value,ind) => 
    {
    console.log(ind,value);
    }

);
arrays.forEach(printme)
function printme  (item,index){
    console.log(index,item);
}
obj.forEach
(
    (element)=>
    {
        console.log(Object.values(element))
    }
)

// filter
//  is use to perform some task on the each value and can also be return
//  so if we want to do somehing with the item we will perform the action and don't need something in return throug foreach
//  and will use filter when we need the 



let nums = [];

// let nums = number.filter( (item) => item>=3 && item<=6 );

number.forEach(item =>( item >= 3 && item <= 5) && nums.push(item) );

// console.log(nums);



const books = [
    { title: 'Book One',  genre: 'Fiction',     publish: 1981, edition: 2004 },
    { title: 'Book Two',  genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three',genre: 'History',     publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science',     publish: 2009, edition: 2014 },
    { title: 'Book Six',  genre: 'Fiction',     publish: 1987, edition: 2010 },
    { title: 'Book Seven',genre: 'History',     publish: 1986, edition: 1996 },
    { title: 'Book Eight',genre: 'Science',     publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let selects = (item,index,array)=>{
    if( item.edition > 2000 && item.genre == "Fiction" )
    {
        return item
    }
};

let favrote = books.filter(selects);

// console.log(favrote);


//  map

number = number.map((value) => value > 5  );

console.log(number);

// chaining


let n = [1,2,3,4,5,6,7,8,9,10];
let newN = n.map(item => item*10) // perform the action on the value array shift next =>
            .map(item => item+1) // // the valu.. on the a... sh.. next =>
            .filter(item => item > 80); // p... th. a... on th. va... ar.. s.. finaly retru.. the value
console.log(newN);


// reduce 
// we will use it for formoming calculational task

n = [1,2,3];

total = n.reduce((acc,cv)=> acc+cv,0);

console.log(total);

let BigN = [
    ,{
        name : "javascript",
        price : 10
    },{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },
{
        name : "javascript",
        price : 10
    },


]
let totalprice = BigN.reduce((acc,item)=> acc+item.price,0);
console.log(totalprice);
