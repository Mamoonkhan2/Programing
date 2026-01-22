type n = number ;
type s = string ;
type b = boolean;

interface userData{
    name:s,
    age :n,
}
interface Admin extends userData{
    admin?:b,
}
let user : Admin = {
    name:"mamoonkhan",
    age : 18,
    admin: true
}

function userHandle(user:Admin ):s|undefined {
    if (user.admin) {
       return `you are fucking admin` 
    }
    if(user.age <= 12){
       return `your are a boy not eligible` 
    }
    return `you are eligble for the application ${user.name}`
}

let users = userHandle(user);
console.log(users);
