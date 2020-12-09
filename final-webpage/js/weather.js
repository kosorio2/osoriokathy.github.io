const apiKey = "5b2bebd5b2367ff7f3d15413c4a3ce89"; 
const apiURL = "https://api.openweathermap.org/data/2.5/"; 
let lat = "20.6274"; 
let lon = "-87.0799";
let method = "weather"; 
let units  = "imperial"; 

let requestURL = apiURL + method + "?" +
                 "lat=" + lat + "&lon=" + lon + 
                 "&appid=" + apiKey +
                 "&units=" + units;  

                console.log(requestURL);

            
fetch(requestURL)
    .then( response => response.json())
    .then( response => {
        const temp = response.main.temp_max;
        const speed = response.wind.speed;
        const descrip = response.weather[0].description; 
        const humid = response.main.humidity; 
        
        document.getElementById('weather-currently').innerText = descrip; 
        document.getElementById('high-temp').innerHTML = temp.toFixed(0) + ' &deg;F';

        let windChill = 'N/A';
        if (temp <= 50 && speed > 3) {
            windChill = 37.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16; 
            windChill = windChill.toFixed(0); 
            windChill += ' &deg;F';
        }
        document.getElementById('wind-chill').innerHTML = windChill; 


    })




method = 'forecast';
requestURL = apiURL + method + "?" +
                 "lat=" + lat + "&lon=" + lon + 
                 "&appid=" + apiKey +
                 "&units=" + units; 

                console.log(requestURL);

                const day_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

fetch(requestURL)
    .then( response => response.json())
    .then( response => {
        console.log('forecast data:');
        console.log(response); 
        // Data represents the information for the json file 
        // console.log(data.weather[0].description);
        
        let forecast_temps = document.querySelectorAll('.forecast-day .temp');
        let forecast_dow = document.querySelectorAll('.forecast-day .dow'); 
        let forecast_day = 0; 
        let forecast_icon = document.querySelectorAll('.forecast-day .icon');

        let list = response.list; 

        for (item of list) {
            if (item.dt_txt.includes('18:00:00')){

                let date = new Date(item.dt * 1000); 

                forecast_dow[forecast_day].innerHTML = day_week[date.getDay()];
                forecast_temps[forecast_day].innerHTML = item.main.temp.toFixed(0) + "&deg;F"; 
                
                let image = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png"
                // image.setAttribute('class', "photos" )
                // image.setAttribute('alt', 'image photo')
                forecast_icon[forecast_day].setAttribute('src', image)
                forecast_icon[forecast_day].setAttribute('alt', 'Image icon')
                forecast_day++; 
            }
        }
    }) 