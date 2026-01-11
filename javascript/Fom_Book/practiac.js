jscript = function() { }
jscript.ui = function() { }
jscript.ui.alerts = new function() { }
jscript.ui.alerts.showErrorAlert = function() {
 console.log("An error occurred");
}
jscript.ui.alerts.Shomassege = function(msg){
    this.msg = msg;
    this.Tostring = function(){
        return "msg=" + this.msg;
    } 
}
let v = new jscript.ui.alerts.Shomassege("helo")
console.log(v.Tostring());
