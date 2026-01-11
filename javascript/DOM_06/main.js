// dom slecter to slect the specific element
let id = document.getElementById("veryNice")
// console.log("id salector => ",id);

let className = document.getElementsByClassName("helloworld");
// console.log("class slecter => ",className);

// querySelector
// will slect the first h1 tag 
// or slect the first only 

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

// console.log("h1 => ",h1);
// console.log("h2 => ",h2);

// we can use the css basic slector 
// like class .classname
// like id  #idname
// so we can use anykind of css slecter in the queryselector

let slectId = document.querySelector('#veryNice');
let slectClass = document.querySelector('.one')

// console.log("#idName => ",slectId);
// console.log(".className =>",slectClass);

// first will slect all the unorder list 
// the other will slect the first list 
// item in it we can store it in 
// a variable 
/// Mamoon khan

let ul = document.querySelector('ul');
let Fl = ul.querySelector('li');

// can also change the color of it by storing it in variables

ul.style.color = 'blue';

Fl.style.color = 'black';

Fl.innerText = "helloworld";

// console.log('unorder list => ',ul);
// console.log('First List Item => ',Fl);


// querySelectorAll will try to find the key in all the document and then will store it in the Nodelist
// it will always give an array/nodeList
// after that we can acces it by the array methood like filter foreach map etc
let TempLiList = document.querySelectorAll('li');
let number = 1;
// it simeler to array but not array
// and we have acces to the foreach loop in prototypes
// console.log(TempLiList);

TempLiList.forEach((item)=>{
    item.style.color = 'black';
    item.innerText = number++;
})
let H1NodeList = document.querySelectorAll('h1');

// we can also acces it as an indexing methood
H1NodeList[0].style.color = 'green';

// or on foreach loop
H1NodeList.forEach((item)=>{
    item.style.color = 'green';
    item.style.backgroundColor = 'gray';
    item.innerText = number++;
})

let H2 = document.querySelectorAll('h2');
H2.forEach((item)=>{
    item.innerText = "Hello World"
    item.style.color = "green";
    item.style.backgroundColor = 'lightgray';
})
// console.log(H2);

// getElementsByClassName
// return type is htmlcollection so we can basically convert it into array
// so to perform task on each element 
// after slecting the class we can convert it into array and perform task
// also when we call something by classname it is converted into a htmlcollection
// and  when we call it by id it is unique so we get only one element

let classname = document.getElementsByClassName("smallheading"); // HTMLCollection[]
let ConvertedHtmlCollection = Array.from(className);// array = [0,1,2,3];

ConvertedHtmlCollection.forEach((item)=>{
    item.style.color = "brown";
})

let SmallHeading = document.getElementsByClassName('smallheading');
let ArrayOfSH = Array.from(SmallHeading);  
ArrayOfSH.forEach((s)=>{
    s.style.color = 'white';
    s.style.backgroundColor = 'black'
})

