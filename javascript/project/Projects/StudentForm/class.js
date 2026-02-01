export class std {
    constructor(remainingTime) {
        this.remainingTime = remainingTime;
    }
   timoutFun(){
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        // setting atttribute
        div.setAttribute('class',"timeout")
        h3.setAttribute("id","sec-dis")
        div.appendChild(h3);            
        
        let secoundLeft = Math.floor(this.remainingTime/1000); // convert like 10000/1000 = 10sec
        
        
        let interval = setInterval(() =>
            {
                if(secoundLeft<=0){// condition when the time is out 
                    clearInterval(interval);
                    h3.innerHTML = "Time's up!";
                    return;

                }
                h3.innerHTML=`${secoundLeft} Secound left `;
                secoundLeft--;
            }
            ,1000)

        return div;
   }
}