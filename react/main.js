let obj = [
    {
    name: 'John',
        age: 30,
        city: 'New York'
    },
    {
        name: 'Jane',
        age: 25,
        city: 'Los Angeles'
    },
    {
        name: 'Mike',
        age: 35,
        city: 'Chicago'
    }
]
let tempObj = {
    name: 'James',
    age: 25,
    city: 'Los Angeles'
}
let foundItem = obj.findIndex((item) => item.name === 'Jane')
obj[foundItem] = tempObj;
console.log(obj)