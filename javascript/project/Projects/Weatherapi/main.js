const input = document.querySelector('.IiS')
const cityName = document.querySelector(".city")
const Temps = document.querySelector(".temp")
const hemuditys = document.querySelector('.humidity')
const winds = document.querySelector('.wind')
const searchButton = input.nextElementSibling
let img = document.querySelector('.weather-icon')

console.log(img);

searchButton.addEventListener("click",(e)=>{
    weather()
}) 


function weather() {

    getdata().then((dat)=>{
        return dat    
    }
    )
    .then(dat =>{
        hemuditys.innerHTML =  `${dat.main.humidity}%`
        winds.innerHTML = `${Math.floor(dat.wind.speed * 3.6)}`
        cityName.innerHTML = `${dat.name}`
        Temps.innerHTML = `${Math.round(dat.main.temp - 273.15)}`
        let cc = dat.weather[0].main
        changeimg(dat.weather[0].main);
    })
    // input.value = ''
}
function changeimg(weatherCondition) {
    img.setAttribute('src',`./images/${weatherCondition}.png`)
}

async function getdata() {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6c63a499fea709f57cd6799cc7a0423f`
   try {
    let response = await fetch(api)
    let data= await response.json()
    return  data
   } catch (error) {
    console.log(error);
   }
}