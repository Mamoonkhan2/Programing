// there is no specent way to store private variable i js so we use iife
// to safe our variable in js 

const Store = (
    ()=>{
        const user = [];
        const stores = [];
        const acceslog = [];
        function createUser(name) {
            user.push(name);
            return name
        }
        function insert(username,store)
        {
            if(user.find((value => value === username))){
                acceslog.push(`[${username} insert ${store}]`);
                stores.push(store);
                return "inserted"
            }
            return "usernot found"
        }
        function getInfo() {
            return acceslog.slice()
        }
        return{
            createUser,
            insert,
            getInfo
        }
    }
)()
const user1 = Store.createUser("mamoonkhan");
const user2 = Store.createUser("amin");

// console.log(Store.insert(user1,"ginger"))
// console.log(Store.insert(user1,"minar"))
// console.log(Store.insert(user2,"minar"))
// console.log(Store.insert(user2,"copy"))
// console.log(Store.acceslog)

const ZamonSons = {};
ZamonSons.inventry = (
    ()=>{
        const user = [];
        const stores = [];
        const acceslog = [];
        return {
           user:user,
           log:acceslog,
           stores,
            createUser(name) {
                user.push(name);
                return name
            },
            insert(username,store){
                    if(user.find((value => value === username))){
                        acceslog.push(`[${username} insert ${store}]`);
                        stores.push(store);
                        return "inserted"
                    }
                    return "usernot found"
            }
        }
    }
)()
ZamonSons.InformationCenter = (
  function (Inv){
    function Getinfo() {
        console.log(Inv.log);
        console.log(Inv.user);
        console.log(Inv.stores);
    }
    return {Getinfo}
  }  
)(ZamonSons.inventry)

ZamonSons.InformationCenter.Getinfo()
const user3 = ZamonSons.inventry.createUser('mamon')
const user4 = ZamonSons.inventry.createUser('haroon')
console.log(ZamonSons.inventry.insert(user3,"fucking"))
console.log(ZamonSons.inventry.insert(user4,"sadf"))
console.log(ZamonSons.inventry.insert(user3,"fucking"))
ZamonSons.InformationCenter.Getinfo()