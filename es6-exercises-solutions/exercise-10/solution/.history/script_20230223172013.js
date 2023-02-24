import {Person, Medic} from "./classes.js";

const person = new Person("Jim", "Halpert");
console.log(person.fullName);
console.log(JSON.stringify(person));

const medic = new Medic("Gregory", "House", "Diagnostician");
console.log(medic.fullName);
console.log(JSON.stringify(medic));

// const request = new Request('/api/names', {
//     method: 'POST',
//     body: JSON.stringify(person),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// const response = await fetch(request);

const response = await fetch('/api/names', {
    method: 'POST',
    body: JSON.stringify(person),
    headers: {
        'Content-Type': 'application/json'
    }
});

const data = await response.json();

console.log("data:"+data);