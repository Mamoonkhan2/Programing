const { log } = require('console');
let fs = require('fs')
const { json } = require('stream/consumers')
// const customer = {
//     name : 'mamoonkhan',
//     age  : 20,
//     college : 'swtate group of college',
//     degree  : "23432432424"
// }

// synchrounesly the file will be read
// let synchPassObj = JSON.stringify(customer,null,2);
// fs.writeFileSync('./fukingData.json',synchPassObj);

// // // asyncrounesly writing into the file
// let asyncPassObj = JSON.stringify(customer,null,4); 
// fs.writeFile('./fukingData.json',asyncPassObj,err=>{
//      if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// });

function SyncWriter(obj,path) {
    let data = JSON.stringify(obj,null,4);
    fs.writeFileSync(path,data)
    console.log("succsessfully wriet data into");
    
}
SyncWriter({name:"harron",age:23,sex:'Male',studying:"Law"},'./fukingData.json')

function AsyncWritingIntoFile(obj,path) {
    let data = JSON.stringify(obj,null,4);
    fs.writeFile(path,data,err => {
        if(err){
            log('error while writing is ',err)
        }
        else{
            log("write succsesfully")
        }
    }
    )
}

// AsyncWritingIntoFile({name:"aginChangeing.json"},'./fukingData.json');
// const { log } = require("console");
// let fs = require("fs");
let PATH = './data.json'
let ENCODE = 'utf-8'

// // let data = fs.readFileSync('./fukingData.json',encode);
// // let JSOBJECTDATA = JSON.parse(data)
// // console.log(JSOBJECTDATA);


function acyncReader(path,encode,cb) {
       fs.readFile(path,encode,(error,succs)=>{
        if(error)
        {
            return cb && cb(error);
        }

        try {
            let customer = JSON.parse(succs);
            return cb && cb(null,customer);
        } catch (err) {
            return cb && cb(err);
        }

       })
}

// acyncReader(PATH,ENCODE,function callback(err,obj){
//     if(err){
//         console.log("error is ",err);
//         return -1;
//     }
//     else{
//         log(obj)
//     }
// })

// function SynchReader(path) {
//     const jsonString = fs.readFileSync("./data.json");
//     const customer = JSON.parse(jsonString);
//     return customer;
// }
// let data = SynchReader(PATH);
// log(data)
