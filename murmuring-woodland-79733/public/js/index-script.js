console.log('client side-js')

// const url = 'http://api.weatherstack.com/current?access_key=1736311a8ffe876d00b5917a10faf660&query=';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=707f6e132d63ee572402c1be5127187a'

var weather = document.getElementById('weather');
weather.textContent = 'Current weather description...';

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var location = document.getElementById('location').value;
    // var newURL = url + location;
    var newURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=707f6e132d63ee572402c1be5127187a'
    weather.textContent = 'fetching data...';
    
    fetch(newURL)
        .then(response => {
            response.json().then((data) => {
                if (data.error) {
                    weather.textContent = 'oops... Unable to locate. Try again!'
                    return console.log(data.error)
                } else {
                    // console.log(data.weather[0].description);
                    // weather.textContent = data.current.weather_descriptions[0] + '. With current temprature of ' + data.current.temperature + " degree celcius. With " + (data.current.precip) + " precipitation."
                    weather.textContent = 'Currently ' + data.weather[0].description + "... With temperature of " + data.main.temp + " degree celcuis. "
                }
            })
        })
    // fetch(newURL)
    //     .then(response => response.json())
    //     .then((data) => {
    //         if (data.error) {
    //             weather.textContent = 'oops... Unable to locate. Try again!'
    //             return console.log(data.error)
    //         } else {
    //             // console.log(data.weather[0].description);
    //             // weather.textContent = data.current.weather_descriptions[0] + '. With current temprature of ' + data.current.temperature + " degree celcius. With " + (data.current.precip) + " precipitation."
    //             weather.textContent = 'Currently ' + data.weather[0].description + "... With temperature of " + data.main.temp + " degree celcuis. "
    //         }
    //     })


    // fetch(newURL)
    //     .then( res => res.json())
    //     .then(data => weather.textContent = data.current.weather_descriptions[0] + '. With current temprature of ' + data.current.temperature + " degree celcius. With " + (data.current.precip) + " precipitation.")
    //     .catch( e => console.log(e))
})

