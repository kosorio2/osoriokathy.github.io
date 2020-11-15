const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const resultElement = document.getElementById('cards')

fetch(requestURL)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 

    const towns = jsonObject['towns'];
    let card = document.createElement('section');

    for ( let i = 0; i < towns.length; i++) {

        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
            let image = document.createElement('img')

            let h2 = document.createElement('h2');
            let div = document.createElement("div")
            div.setAttribute('class', "division")
            h2.setAttribute('class', "name")
            let h4 = document.createElement('h4');
            h4.setAttribute('class', "name")
            let article = document.createElement('article');
            article.setAttribute('class', "name")
            let p = document.createElement('p');
            p.setAttribute('class', "name")
            let p2 = document.createElement('p');
            p.setAttribute('class', "name")
            let p3 = document.createElement('p');

            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('class', "photos" )
            image.setAttribute('alt', 'Images depicting the towns')
            image.apphend = towns[i].photo

            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto; 
            p.textContent = "Year Founded: " + towns[i].yearFounded; 
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

            
    
    
            
            div.appendChild(h2);
            div.appendChild(h4);

            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(p3)
            article.appendChild(div)
            article.appendChild(image)
            
    

            card.appendChild(article); 
        }

    }
    resultElement.appendChild(card); 

}); 
