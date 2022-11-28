const request = require('request')
const key = "a39bccff108a418c44d456e9c72db600";

const geocode = (address,callback)=>{

    request("http://api.openweathermap.org/geo/1.0/direct?q="+address+"&appid=" + key, {json: true}, (error, response) => {
        if (error){
            callback('error in connection',undefined)
        }
        else if (response.body ===0){
            callback('unable to find location in this long , lat',undefined)
        }
        else{
            callback(undefined, {
                longitude:response.body[0].lon,
                latitude:response.body[0].lat
            })
        }
    })
}

module.exports = geocode