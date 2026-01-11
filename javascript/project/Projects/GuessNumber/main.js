let inputUser =    document.querySelector("#inp");
let submitButton = document.querySelector("#sub");
let pervious = document.querySelector(".pre");
let remaing  = document.querySelector(".rem");
let Table =    document.querySelector(".table")
let resPara  = document.querySelector(".resPara");
let playCount = 1;
let userPlay  = true;
let itemcount = 1;
let randomNumber = parseInt((Math.random() * 100 ) + 1);
let numberArray = []
if(userPlay){
    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        let number = parseInt(inputUser.value);
        validationTest(number)        
    })
}

function validationTest(num) {
        if (isNaN(num)) {
            alert("you enter the NAN type please corect the type first")
        }
        else if (num<0 || num>100){
            alert("the number have give is either large to be process or very small to be guess")
        }
        else if (num == undefined || num == ' '){
            alert("you don,t give any of the fucking value to the Programe")
        }
        else{

            if(playCount > 10){
                displayMassege(`You have Loss the Game Please don't be said and just try again And the RandNumber is ${randomNumber} `)
                endGame();
            }
            else{ 
                displayReslut(num);
                numberArray.push(num)
                checkWin(num)
            }
        }
}
function checkWin(num) {
    if (num === randomNumber ) {
        displayMassege(`you Win The Match`);
        endGame();
    
    }
    else if(num>randomNumber){
        displayMassege(`HIGH`)
    }
    else{
        displayMassege(`LOW`)
    }
}
function displayReslut(num) {
    pervious.innerHTML += ` ${num}`
    console.log(pervious)
    playCount++;
    remaing.innerHTML = `${11 - playCount}` 
}
function endGame() {
    numberArray.forEach((item,index)=>{
        Table.innerHTML += `<br> I ${index+itemcount} : V ${item}  `
    })
    inputUser.value = ' ';
    inputUser.disabled = true;
    userPlay = false;
    submitButton.disabled = true;

    resPara.innerHTML += `<br><button id = "startGame">StarNewGame</button><br><br><button id = "clear">clearTheTAble</button>`
    startGame()
}
function startGame() {
    let clicking = document.querySelector("button")
    clicking
    .addEventListener('click',()=>{
        inputUser.value = ' ';
        inputUser.disabled = false;
        submitButton.disabled = false;
        pervious.innerHTML = ` `;
        playCount = 1;
        userPlay = true;
        remaing.innerHTML = `10`; 
        resPara.innerHTML = ` `;
        randomNumber = parseInt((Math.random() * 100 ) + 1);
    })
    let clear = document.querySelector("#clear");
    clear.addEventListener("click",()=>{
        Table.innerHTML = ` `
    })
}
function displayMassege(masseges) {
    resPara.innerHTML = `::-> ${masseges} <-::`
}