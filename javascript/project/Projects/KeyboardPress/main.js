let div = document.querySelector("#con");

let update = (e)=>{
    e.prevendefalut
    div.innerHTML =   `
    <table>
    <tr>
            <th>Key</th>
            <th>keyCode</th>
            <th>charCode</th>
        </tr>
        <tr>
            <td>${e.key == " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    
    ` 
    console.log(e);
    
}

document.addEventListener("keydown",update)
