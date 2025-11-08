"use strict";

function f1() { // slide 46
// Afficher 3 étudiants (slide 45)
for (let i = 1; i <= 3; i++) {
    console.log(`Etudiant${i}`); // slide 33
}
}

function f2() { // slide 46
// Afficher les infos d’un étudiant
console.log("nom : 'John', prenom : 'Doe', age : 30"); // slide 33
}

function f3() { // slide 46
// Afficher nom, prénom et âge dynamique (slide 45)
for (let i = 1; i <= 3; i++) {
    console.log(`nom${i} - prenom${i} - age: ${20 + i}`); // slide 33
}
}