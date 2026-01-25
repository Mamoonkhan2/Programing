export default  class users {
    constructor(name,bgc) {
        this.name = name;
        this.bgc  = bgc ;
    }
    gretting(){
        return `your name is ${this.name}`
    }
}