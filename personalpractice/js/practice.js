let myInfo = {};

myInfo = {
    name: 'Kathy Osorio',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Pizza',
        'Pupusas',
        'Pasta', 
        'Cupcakes'
    ],
    hobbies: [
        'dancing',
        'drawing',
        'cooking'
    ],
    placesLived: [
        {
            place: 'Mesa, Arizona',
            length: '2 Years'
        },
        {
            place: 'Rexburg, Idaho',
            length: '2 years'
        }
    
     ]
};

document.querySelector('#name').textContent = myInfo.name; 
document.querySelector('#photo').setAttribute = ('src', myInfo.photo);
document.querySelector('#photo').setAttribute = ('alt',myInfo.name);

let favoriteFood1 = document.createElement('li'); 
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement('li');
favoriteFood4.textContent = myInfo.favoriteFoods[3];

document.querySelector('#favorite-foods').appendChild(favoriteFood1);
document.querySelector('#favorite-foods').appendChild(favoriteFood2);
document.querySelector('#favorite-foods').appendChild(favoriteFood3);
document.querySelector('#favorite-foods').appendChild(favoriteFood4);

let hobby1 = document.createElement('li'); 
hobby1.textContent = myInfo.hobbies[0];

let hobby2 = document.createElement('li');
hobby2.textContent = myInfo.hobbies[1];

let hobby3 = document.createElement('li');
hobby3.textContent = myInfo.hobbies[2];

document.querySelector('#hobbies').appendChild(hobby1); 
document.querySelector('#hobbies').appendChild(hobby2);
document.querySelector('#hobbies').appendChild(hobby3); 



let placesLivedPlace1 = document.createElement('dt');
placesLivedPlace1.textContent = myInfo.placesLived[0].place;

let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = myInfo.placesLived[0].length;

let placesLivedPlace2 = document.createElement('dt');
placesLivedPlace2.textContent = myInfo.placesLived[1].place; 

let placesLivedLength2 = document.createElement('dd');
placesLivedLength2.textContent = myInfo.placesLived[1].length;

document.querySelector('#places-lived').appendChild(placesLivedPlace1);
document.querySelector('#places-lived').appendChild(placesLivedLength1);
document.querySelector('#places-lived').appendChild(placesLivedPlace2);
document.querySelector('#places-lived').appendChild(placesLivedLength2);

