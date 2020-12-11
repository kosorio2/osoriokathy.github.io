const jsonFile = "js/scoots.json";
const resultElement = document.getElementById('tables');

fetch(jsonFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);


    const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++) {
            let table = document.createElement('tr');
            let rental = document.createElement('td');
            let people = document.createElement('td');
            let reserved = document.createElement('td');
            let Reserved = document.createElement('td');
            let walkIn = document.createElement('td');
            let walkedIn = document.createElement('td');

            let image = document.createElement('img')

            rental.textContent = rentals[i].model; 
            people.textContent = rentals[i].max;
            reserved.textContent = rentals[i].reservedHalf;
            Reserved.textContent = rentals[i].reservedFull;  
            walkIn.textContent = rentals[i].walkHalf; 
            walkedIn.textContent = rentals[i].walkFull; 

            image.setAttribute('src', 'images/' + rentals[i].photo); 
            image.setAttribute('alt', 'Images of the Rentals')
            image.append = rentals[i].photo
            

            table.appendChild(rental);
            table.appendChild(image);
            table.appendChild(people);
            table.appendChild(reserved);
            table.appendChild(Reserved);
            table.appendChild(walkIn);
            table.appendChild(walkedIn);

            resultElement.appendChild(table)
        }

    }); 