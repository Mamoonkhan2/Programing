// let fs = require('fs')
// const customer = {
//     name : 'mamoonkhan',
//     age  : 20,
//     college : 'state group of college',
//     degree  : "computersScienceds"
// }

// // synchrounesly the file will be read
// // let synchPassObj = JSON.stringify(customer,null,2);fs.writeFileSync('./fukingData.json',jsonObj);

// // asyncrounesly writing into the file
// let asyncPassObj = JSON.stringify(customer,null,4); fs.writeFile('./fuckingData.json',asyncPassObj,err=>console.log('error while loading file is ',err));


let fs = require("fs");
let path = './fuckingData.json'
let encode = 'utf-8'

// let data = fs.readFileSync('./fukingData.json',encode);
// let JSOBJECTDATA = JSON.parse(data)
// console.log(JSOBJECTDATA);


function err(cb) {
       fs.readFile(path,encode,(error,succs)=>{
        if(error)
        {
            return cb && cb(err);
        }

        try {
            let customer = JSON.parse(succs);
            return cb && cb(null,customer);
        } catch (error) {
            return cb && cb(err);
        }

       })
}

err((err,obj)=>{
    if(err){
        console.log("error is ",err);
        return
    }
    
})