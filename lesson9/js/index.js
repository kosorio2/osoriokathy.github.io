const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const resultElement = document.getElementById('cards')

fetch(requestURL)
  .then(function (response) {
      return response.json(); 
  })
  .then(function (jsonObject) {
      console.log(jsonObject); 

  const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('div')
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p'); 

    h2.textContent = towns[i].name;
    h3.textContent = towns[i].motto; 
    p.textContent = towns[i].yearFounded; 
    p2.textContent = towns[i].currentPopulation;
    p3.textContent = towns[i].averageRainfall; 
    
    let image = document.createElement('img')
    image.setAttribute('src', towns[i].photo);

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3); 
    card.appendChild(image);

    resultElement.appendChild(card); 


    }

}); 
