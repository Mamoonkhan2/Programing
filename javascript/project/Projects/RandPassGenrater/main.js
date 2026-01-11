// DOM varibale or html elements
let password = document.getElementById('password');
let copy_btn = document.getElementById('copyBtn')
let length_btn = document.getElementById('Lenght-btn')

// set the charecter for random pickup
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/';
// current lenght is  0 
let CurrentLenght = 0;
//random password logic
function generatePassword(Lenght) {
     let result = '';

    for (let i = 0; i < Lenght; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }

    return result;
}

// main logic
// when enter the number in the lenght feild 
// then press enter 
// then we are allow to copy some value
length_btn.addEventListener('keydown', e => {

    if (e.key == "Enter") {
        // when enter inside the feild lenght btn
        // update the current 

        CurrentLenght = Number(e.target.value);
        // then genrate
        let c = generatePassword(CurrentLenght)
        password.value = c
        
        //after that allow copying 
        copy_btn.addEventListener('click', () => {
            // c = password.value 
            password.value = c;
            // then copy
            navigator.clipboard.writeText(c);
            // while clicking  change the img
            copy_btn.setAttribute(
                'src',
                'copyimg.png'
            );
            // after set atribute to the privious one 
            setTimeout(() => {
                copy_btn.setAttribute('src', "https://img.icons8.com/?size=100&id=82790&format=png&color=ffffff");
                password.value = ''
            }, 1000);
        });
    }
})


