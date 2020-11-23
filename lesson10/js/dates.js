function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");  
}
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let output = day[date.getDay()] + ", " + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

document.getElementById('date').innerHTML = output; 

if (date.getDay() == 5) {
    document.getElementById("pop-up").style.display="block"; 

}

function doInputOutput() {
    let temp = parseFloat(document.getElementById('temperature').innerText); 
    let wind = parseFloat(document.getElementById('speed').innerText); 
    let answer = windChill(temp, wind); 

    document.getElementById('output').innerHTML = answer.toFixed(0);
} 

// function windChill(tempF, speed) {
//     let windChill = 35.74 + (0.6215*tempF) - 35.75 * (Math.pow(speed, 0.16)) + ((0.4275 * tempF) * (Math.pow(speed, 0.16))); 
    
//     return windChill; 
// }

doInputOutput(); 

