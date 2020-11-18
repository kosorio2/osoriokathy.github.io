const apiKey = "5b2bebd5b2367ff7f3d15413c4a3ce89"; 
const apiURL = "http://api.openweathermap.org/data/2.5/weather"; 
let cityId   = "5604473"; 
let units    = "imperial"; 

let requestURL = apiURL + "?" +
                 "id=" + cityId + 
                 "&appid=" + apiKey +
                 "&units=" + units;  

console.log(requestURL);

fetch(requestURL)
    .then( response => response.json())
    .then( response => {
        console.log(response); 
        // Data represents the information for the json file 
        // console.log(data.weather[0].description);

        let temperature = response.main.temp;
        document.getElementById('current-temp').innerText = temperature; 
    }) 