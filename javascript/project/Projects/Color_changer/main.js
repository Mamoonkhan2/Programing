// the dom monopulation is use to intaract with html through javascript
let documents = document;

// callaing element by id
let element1 = document.getElementById("white")
let element2 = document.getElementById("black")
let element3 = document.getElementById("gray")
let element4 = documents.getElementById("heading");
// will give all the element with the every tag init
// console.log("getElementById(ID) => ",element1);

// calling attribute
// getAttribute(id) will show the id value id is the key and the value is the name of it
// console.log("getAttribute('id') => ",element1.getAttribute('id'));
// console.log("getAttribute('CLASS') => ",element1.getAttribute('class'));


// .id will show the value of it 
// console.log(".id => ",element1.id);

// .className will show the value of the class 
// console.log(".className => ",element1.className);


//setAttribute('attributeName','value/name')) will give the name of the attribute to change then it will override the orginal value of that attrivbute to the change one 
// console.log("CHANGE THE CLASS NAME IN TO =>     `",element1.setAttribute('class','fuckYouAtifA'));
// console.log("now change class name => ",element1.className);






// calling by tag name
let bodys = document.body;

// looking innertext and html and contant
// fist innerText
// the inner text will show the visible contant only
// or simply the text only

console.log("innertext => ",element1.innerText)

// innerHTML
// will show every thing in the element or every text
// also with tag it is usefull when incerting the 
// new item in that html

// console.log("innerhtml => ",element2.innerHTML);

// element1.addEventListener('click',()=>{
//     bodys.style.backgroundColor = 'white';
//     bodys.style.color = "white"
//     console.log("whiteClick");
    
// })
// element2.addEventListener('click',(e)=>{
//     bodys.style.backgroundColor = 'black';
//     bodys.style.color = "black";
//     bodys.style.textAlign = 'center';
//     console.log("Click black button again");
// })
// element3.addEventListener('click',()=>{
//     bodys.style.backgroundColor = 'gray';
//     bodys.style.color = "gray"
//     console.log("grayClick");
    
    
// })
// element4.addEventListener('click',()=>{
//     bodys.style.backgroundColor = 'blue';
// })

// easy way to write the above code

let ParentE = documents.body;
let Buttons = documents.querySelectorAll(".button");
// console.log(Buttons);

Buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id == "gray"){
            ParentE.style.color = "green";
            ParentE.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "black"){
            ParentE.style.color = "brown";
            ParentE.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "white"){
            ParentE.style.color = "yellow";
            ParentE.style.backgroundColor = e.target.id;
        }

    })
})