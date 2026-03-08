const account = [{
	name:"fuckyou:",
	isVeg:true
},
{
	name:"fuckyou:1",
	isVeg:false
},
{
	name:"fuckyou:2",
	isVeg:true
	
}
,
{
	name:"fuckyou:3",
	isVeg:false
	
}
]

let reduceM = account.reduce((detail,item)=>{
	const category = item.isVeg ? 'veg' : 'nonveg' ;
	console.log(category)
	detail[category].push(item.name)
	return detail
},{
	veg:[],
	nonveg:[]
})

console.log(reduceM)