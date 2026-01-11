let grocerylist = [];
let yes = true;

while (true) {
    let senario = prompt("1 : add || 2 : remove || 3 : exit || 4 : display");
    if(senario == 1){
        let additem = prompt("add item");
    }
    else if(senario == 2)
    {
        let find = prompt("remove the selected item");
        let indexfind = grocerylist.indexOf(find);
        if(grocerylist.find(find)){
            grocerylist.splice(indexfind,1);
        }
        else{
            console.log("not find the item try again");
            
        }
    }
    else if(senario ==  4){
        for (let index = 0; index < grocerylist.length; index++) {
            const element = array[index];
            prompt(element);
            
        }
        
    }
    else if(senario ==  3){
        break;
    }
    else{
        console.log("incorect senario");
        
    }
}