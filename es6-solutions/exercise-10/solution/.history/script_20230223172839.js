import {Person, Medic} from "./classes.js";

const person = new Person("Jim", "Halpert");
console.log(person.fullName);
console.log(JSON.stringify(person));

const medic = new Medic("Gregory", "House", "Diagnostician");
console.log(medic.fullName);
console.log(JSON.stringify(medic));



// const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(person),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// });

// const data = await response.json();

// console.log("data: "+data);

function postPerson(person) {

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(person),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(data => console.log("data: "+JSON.stringify(data)))
.then(err => console.log("error: "+err));

}