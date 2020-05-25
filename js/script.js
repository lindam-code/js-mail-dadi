// INIZIO SCRIPT PER IL CONTROLLO DELL'EMAIL

// Inizializzazione variabili
// var emailUtente = prompt('Scrivi la tua email');
// listaEmail = ['linda@gmail.com', 'alice@gmail.com', 'pippo@gmail.com', 'topolino@gmil.com', 'minnie@gmail.com', 'paperina@gmail.com'];
// var controlloEmail = false;
//
//
// // Ciclo for per iterare l'array listaEmail e controllare se l'email data dall'utente è presente
// for (var i = 0; i < listaEmail.length; i++) {
//   if (listaEmail[i] == emailUtente) {
//     controlloEmail = true;
//   }
// }
//
// // Condizione per stampare una risposta all'utente
// if (controlloEmail) {
//   console.log('Puoi entrare!!');
// } else {
//   console.log('La tua email non è nella lista degli invistati: non puoi entrare!')
// }
// Fine script per il controllo dell'email

// SCRIPT PER IL GIOCO DEI DADI
// Crea variabili numeri casuali dadi
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log('Numero giocatore: ' + numeroGiocatore);
var numeroPc = Math.floor(Math.random() * 6) + 1;
console.log('Numero giocatore: ' + numeroPc);

// Controllo del vincitore
if (numeroGiocatore > numeroPc) {
  console.log('Ha vinto il giocatore!');
} else if (numeroGiocatore < numeroPc) {
  console.log('Ha vinto il PC!');
} else {
  console.log ('Parimerito!!');
}
