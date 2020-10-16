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