const request = require('request')
const key = "a39bccff108a418c44d456e9c72db600";

const forecast = (lon,lat,callback)=>{

    request("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key, {json: true}, (error, response) => {
            if (error){
                callback('error in connection',undefined)
            }
            else if (response.body ===0){
                callback('unable to find location in this long , lat',undefined)
            }
            else{
                callback(undefined,response.body)
            }
    })
}

module.exports = forecast



