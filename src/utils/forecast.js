const request = require('request')
const forecast = (lat, lon, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=cb21b180c6fd3afcb91a26575afbc02b&query=' + lat + ',' + lon + '&units=f'
    request({url, json: true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, 'Current weather is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees out, and the current humidity is ' + body.current.humidity + '%')
        }
    })
}
module.exports = forecast