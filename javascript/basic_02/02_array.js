// joing to array methood
// push will update the array and add new array as element

let heros = ["sharukkhan","salmankhan",'amirkhan'];
let Aheros = ['metabachan',"gulidawan",'katrina'];

heros.push(Aheros); // will add Aheros as item or element of the array
console.log(heros); 

// [
//   'sharukkhan',
//   'salmankhan',
//   'amirkhan',
//   [ 'metabachan', 'gulidawan', 'katrina' ] add as item of the array or 2d array
// ]

console.log(heros[3][0]); // acceing from push comand

// concate
// will return new array add togather merge togather

let concate = [1,2,3];
let concted = [4,5,6];
let Aconcte = concate.concat(concted);
console.log(Aconcte);

// flat
// will falt the elemant togather and merge it in array 
// limitation

let flats = [1,2,3];
let Aflat = [4,5,6];
let Resultflat = flats.flat(Aflat);
console.log(Resultflat);


// spread operater
// will spread the array into the orignal item of it and then merge it togather

let spread = [1,2,3];
let Aspred = [4,5,6];
let Resultspread = [...spread,...Aspred,65] // can add more

console.log(Resultspread);


// also like spread but not realyble

//convertion of array converting anything to array

console.log(Array.isArray("mamon"));
console.log(Array.from("mamon"));
console.log(Array.from({name:"mamoon"})); // a unique case when we give object and not call it by some value mean by it key or if not converted in array will give us the empty array

// can also give any element in from and of to convert into array

let name1 = "mamoonkhan";
let name2 = "harroonkhan";
console.log(Array.of(name1,name2));// [ 'mamoonkhan', 'harroonkhan' ]


