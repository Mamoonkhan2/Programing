movie = [
    {tilte:"a",name:"a"},
    {tilte:"b",name:"b"},
    {tilte:"a",name:"a"},
    {tilte:"c",name:"c"},
    {tilte:"d",name:"d"},
]
const a = 'lajsdf'
a.startsWith
const searchMove = movie.map(item => {
if(item.name.toLowerCase().startsWith('a'))
    {
        return item;
    }
    else{
        return {};
    }
    
})
console.log(searchMove)