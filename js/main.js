const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Dimmi il tuo colore preferito!');
const firstNumber = prompt('Il tuo numero fortunato è...');
const secondNumber = prompt('E il tuo numero sfortunato?');
const dividedNumber = Math.floor(firstNumber / secondNumber);
const unsafePassword = `

--------- La tua password supersicura è:------------

${firstName}${lastName}${favouriteColor}${dividedNumber}

----------------------------------------------------

`;

console.log(unsafePassword);