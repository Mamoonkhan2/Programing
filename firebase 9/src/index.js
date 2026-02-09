import { initializeApp } from "firebase/app"; // initialize firease project
import {
  getFirestore, // will get the firestore through configuration obj
  collection, // will get a collection 
  getDocs, // will get the document only the page reloads 
  addDoc, // will add a custom document
  deleteDoc,// will delete a document
  doc, // doc will refrece to our element through id's
  onSnapshot,// will show a realtime data change in our project
  query,// querey allow us to do querys on collection 
  where,// find the element by conditionalizeing it
  orderBy,// order a document in ase decs
  serverTimestamp, // for creating a current time as we do in date.now() 
} from "firebase/firestore";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firestore reference
// const db = getFirestore(app);

// // Collection reference
// const collRef = collection(db, "book");

// // Fetch data
// // getDocs(collRef)
// //   .then((snapshot) => {
// //     const userinfo = []
// //     snapshot.docs.forEach(element => {
// //         userinfo.push({...element.data(),id:element.id})
// //     });
// //     console.log(userinfo);
// //   })
// //   .catch((error) => {
// //     console.error("Error getting documents:", error);
// //   });
//   // dom element
let addBookForm = document.querySelector(".add");
// let delBookFrom = document.querySelector('#del');
// addBookForm.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   let names = document.querySelector('#name').value;
//   let ages = document.querySelector('#age').value;
//   addDoc(collRef,
//     {
//       name: names,
//       age : Number(ages) ,
//     }) 
//   .then(()=>{
//     addBookForm.reset();
//   })

// })
// onSnapshot(collRef,(snapshot)=>{
//     const userinfo = []
//     snapshot.docs.forEach(element => {
//         userinfo.push({...element.data(),id:element.id})
//     });
//     console.log(userinfo);
//   })
  

// delBookFrom.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   let id = document.querySelector('#ids').value
//   let docRef = doc(db,'book',id);
//   deleteDoc(docRef).then(()=>{
//     delBookFrom.reset();
//   })
// })
let updating = document.querySelector(".updateing")

const firebaseConfig = {
  apiKey: "AIzaSyBS-C0ez_ssiptEHHKcJRMmUTFptZMKaKc",
  authDomain: "fir-9-773d5.firebaseapp.com",
  projectId: "fir-9-773d5",
  storageBucket: "fir-9-773d5.firebasestorage.app",
  messagingSenderId: "436385832246",
  appId: "1:436385832246:web:862abca33ad9eb03286797"
};

let app = initializeApp(firebaseConfig);

let db = getFirestore(app) ;

let collRef = collection(db,'users');

let q = query(collRef,where("password","==","mamoonkhan"),orderBy('createdAt'))

let dataObj = [] ;

onSnapshot(q,(data)=>{
  dataObj = [];
  data.docs.forEach(e=>(dataObj.push({...e.data(),id:e.id})));
  console.log('hello ',dataObj);
})

addBookForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (!dataObj.length) {
    return console.log("Data not loaded yet");
  }
  let names = document.querySelector('#name').value;
  let ages  = document.querySelector('#pass').value;
  let namecheck = dataObj.some(doc=> doc.Name ==names || doc.name == names)
  let userinfo = dataObj.some(doc => doc.password == ages )
  console.log( namecheck);
  console.log( userinfo);
  console.log(typeof String(ages))

})


updating.addEventListener('submit',(e)=>{
  e.preventDefault()

    let name = document.querySelector("#nmU").value.trim()
    let pass = document.querySelector("#ageU").value.trim()
  addDoc(collRef,{
    name:name,
    password:pass,
    createdAt:serverTimestamp()
  })
  .then(()=>{
    updating.reset()
  })
})