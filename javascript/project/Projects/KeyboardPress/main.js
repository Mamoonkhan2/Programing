// let div = document.querySelector("#con");

// let update = (e)=>{
//     e.prevendefalut
//     div.innerHTML =   `
//     <table>
//     <tr>
//             <th>Key</th>
//             <th>keyCode</th>
//             <th>charCode</th>
//         </tr>
//         <tr>
//             <td>${e.key == " " ? "Space" : e.key}</td>
//             <td>${e.keyCode}</td>
//             <td>${e.code}</td>
//         </tr>
//         </table>
    
//     ` 
//     console.log(e);
    
// }

// document.addEventListener("keydown",update)

function hellow() {
    console.log("hello")
    return 1
}
let s = "globalScope"
async function asynfun(){
    setTimeout(()=>{
        console.log(s);
        
        console.log("hello world from acync function");

    },1000)    
}
let name = 'Mamoonkhan';
let number = hellow();
let data =  asynfun()
// data.then(e=>{
//     console.log(e);
//     console.log("lasdjf");
    
    
// });


