function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");  
}

let Lm= document.lastModified; 
let Y= new Date().getFullYear(); 
document.getElementById("Modified").innerHTML = Lm; 
document.getElementById("Year").innerHTML = Y; 