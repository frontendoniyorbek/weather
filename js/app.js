// const changeLocation = document.getElementById('change-location')
// const card = document.getElementById('card')
// const details = document.getElementById('details')
// const weatherIcon = document.getElementById('weather-icon')
// const overlay = document.getElementById('overlay')

// // update UI
// const uodateUI = (weather) => {
//     details.innerHTML = `
//         <h5 class="mb-3">${weather.name}, ${weather.sys.counry}</h5>
//         <p class="mb-3">CLOUDS</p>
//         <div class="display-4 mb-3">
//             <span>TEMP</span>
//             <span>&deg;C</span>
//         </div>
//     `
// }

// // get weather
// const getWeather = async (city) => {
//     const date = await getData(city)

//     return date
// }

// //get location
// changeLocation.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const cityName = changeLocation.city.value.trim()
//     changeLocation.reset()
//     getWeather(cityName)
// })