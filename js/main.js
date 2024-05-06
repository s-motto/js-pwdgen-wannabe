
const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Dimmi il tuo colore preferito!');
const firstNumber = prompt('Il tuo numero fortunato è...');
const secondNumber = prompt('E il tuo numero sfortunato?');
const dividedNumber = Math.floor(firstNumber / secondNumber);
const unsafePassword = `${firstName}${lastName}${favouriteColor}${dividedNumber}`;

console.log(
    `_-_-_-La tua password molto, MOLTO sicura è-_-_-_
                   ${unsafePassword}
     _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ `);

document.getElementById('password').innerHTML = unsafePassword;