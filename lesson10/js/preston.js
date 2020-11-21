const apiKey = "5b2bebd5b2367ff7f3d15413c4a3ce89"; 
const apiURL = "https://api.openweathermap.org/data/2.5/";
method = "forecast";  
let cityId   = "5604473"; 
let units    = "imperial"; 

let requestURL = apiURL + method + "?" +
                 "id=" + cityId + 
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
                forecast_temps[forecast_day].innerHTML = item.main.temp + "&deg;F"; 
                
                let image = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png"
                forecast_icon[forecast_day].setAttribute('src', image)
                forecast_day++; 
            }
        }

    }) 