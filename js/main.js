const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Dimmi il tuo colore preferito!');
const unsafePassword = `

--------- La tua password supersicura è:------------

${firstName}${lastName}${favouriteColor}21

----------------------------------------------------

`;

console.log(unsafePassword);