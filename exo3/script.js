"use strict";

function B(moyenne) {              // slide 46
return moyenne >= 10;          // retourne un boolÃ©en
}

function A() {                     // slide 46
const students = [             // slide 38
{ id: 1000, nom: 'JOHN', prenom: 'DOE', note1: 14, note2: 5 },
{ id: 2000, nom: 'BOB', prenom: 'CARLTON', note1: 7, note2: 1 },
{ id: 3000, nom: 'RAYANE', prenom: 'SMITH', note1: 13, note2: 3 }
];

students.forEach(student => {
const moyenne = (student.note1 + student.note2) / 2 + 5;
const estAdmis = B(moyenne);
console.log(`${student.id}: ${estAdmis ? "ADMIS" : "AJOURNE"}`); // slide 33
});
}