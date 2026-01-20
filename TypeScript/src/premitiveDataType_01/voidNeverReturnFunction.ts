function name():void {
    console.log("nothing is returning");
}
function name2():string {
    console.log("retruning String");
    return `string is returning`
}
// function name3():never {
//     console.log("retruning String");
// }
// name3()
console.log('not working because of never used in function before');
