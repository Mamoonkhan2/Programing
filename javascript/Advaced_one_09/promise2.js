// let promiseOne = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello world");
//         res();
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("hello world from function itself");
    
// })
// console.log("outer one 1");

// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello 2");
//         res()
        
//     },1010);
// })
// .then(()=>{
//     console.log("hello form res 2");
    
// })

// console.log("outer one 2");

// let promiseThree = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res({username:"mamoonkhan",age : 20})
//     }, 2000);
// })

// promiseThree.then(({username:u,age:a})=>{
//     console.log(u,a);
    
// })

// let promiseFour = new Promise((res,rej)=>{
    
//     setTimeout(() => {

//         let error = false
//         if(error){
//             res({username:"mamoonkhan",age : 20})
//         }else{
//             rej("you got an name error")
//         }

//     }, 1000);

// })
// // chaining in chaing we will the value to the other nighbour and he will acces it through argumants
// // {username:u,age:a}

// let data  = promiseFour
// .then((userObject)=>{
//     console.log(userObject);
//     return userObject.username;
// })
// .then((age)=>{
//     console.log(age);
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function name() {
//     let promiseFive = new Promise((res,rej)=>{
//             setTimeout(() => {
    
//             let error = false
//             if(error){
//                 res({username:"JavaScript",age : 25})
//             }else{
//                 rej("you got an JS error")
//             }
    
//         }, 2000);
    
//     })
//     try {
//         const response = await promiseFive;
//         console.log(response.username);
        
//     } catch (err) {
//         console.log(err);
//     }
// }

// name()
// console.log("hello world");


// async function getAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         data.forEach(users => {
//             console.log(users.id);
//         });
        
//     } catch (err) {
//         console.log(err);
//     }
// }
// getAllUsers()