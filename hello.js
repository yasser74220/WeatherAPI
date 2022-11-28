const request = require('request')
const geocode = require('../untitled3/utils/geocode')
const forecast = require('../untitled3/utils/forecast')

geocode('london',(error,data)=>{
    console.log(error)
    forecast(data.longitude,data.latitude,(error,data)=>{
        console.log(error)
        console.log(data)
    })
})











// const key = "a39bccff108a418c44d456e9c72db600";
// var lon;
// var lat;
// request("http://api.openweathermap.org/geo/1.0/direct?q=London&appid=" + key, {json: true}, (error, response) => {
//     lon = response.body[0].lon;
//     lat = response.body[0].lat;
//     request("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key, {json: true}, (error, response) => {
//         console.log(response.body);
//     })
// })


// console.log("Start");
// setTimeout(() =>{
//     console.log('done')
// }, 9000 );
// setTimeout(() =>{
//     console.log('WTF')
// }, 0 );
//
// console.log("Start");

// function Sum(num1, num2, callback) {
//     setTimeout(() => {
//         var sum = num1 + num2
//         return callback(sum)
//     }, 2000);
//
//
//
//
// }
// Sum(1,4,(sum)=>{
//     console.log(sum)
// })

