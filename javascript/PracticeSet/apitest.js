// fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10').then((data)=>{
//     return data.json()
// })
// .then(data=>console.log(data.data))
fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches')
.then(data=>data.json())
.then(data=>console.log(data.data.data))