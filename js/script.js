// INIZIO SCRIPT PER IL CONTROLLO DELL'EMAIL

// Inizializzazione variabili
// var emailUtente = prompt('Scrivi la tua email');
// listaEmail = ['linda@gmail.com', 'alice@gmail.com', 'pippo@gmail.com', 'topolino@gmil.com', 'minnie@gmail.com', 'paperina@gmail.com'];
// var controlloEmail = false;
// // Ciclo for per iterare l'array listaEmail e controllare se l'email data dall'utente è presente
// for (var i = 0; i < listaEmail.length; i++) {
//   if (listaEmail[i] == emailUtente) {
//     controlloEmail = true;
//   }
// }
// // Condizione per stampare una risposta all'utente
// if (controlloEmail) {
//   console.log('Puoi entrare!!');
//   // SCRIPT PER IL GIOCO DEI DADI
//   // Crea variabili numeri dei dadi
//   var numeroGiocatore = parseInt(prompt('Lancia il dado: scrivi un numero da 1 a 6!'));
//   console.log('Numero giocatore: ' + numeroGiocatore);
//   var numeroPc = Math.floor(Math.random() * 6) + 1;
//   console.log('Numero generato dal pc: ' + numeroPc);
//
//   // Controllo del vincitore ai dadi
//   if (numeroGiocatore > 0 && numeroGiocatore < 7) {
//     if (numeroGiocatore > numeroPc) {
//       console.log('Ha vinto il giocatore!');
//     } else if (numeroGiocatore < numeroPc) {
//       console.log('Ha vinto il PC!');
//     } else {
//       console.log ('Parimerito!!');
//     }
//   } else if (isNaN(numeroGiocatore)) {
//     alert('Errore: devi inserire un numero da 1 a 6 valido.');
//   } else {
//     alert('Errore: il numero inserito non è valido per il gioco dei dadi.');
//   }
// } else {
//   console.log('La tua email non è nella lista degli invistati: non puoi entrare!');
// }
// // Fine script per il controllo dell'email

// PROVA SENZA prompt
// Inizilizzazione variabili
var buttonInviaEmail = document.getElementById('invio_email');
listaEmail = ['linda@gmail.com', 'alice@gmail.com', 'pippo@gmail.com', 'topolino@gmil.com', 'minnie@gmail.com', 'paperina@gmail.com'];
var controlloEmail = false;
var buttonLanciaDado = document.getElementById('lancia_dado');
var giocoContainer = document.getElementById('gioco_container');

// Creo evento per entrare nel gioco se la mail è presente nella lista
buttonInviaEmail.addEventListener('click',
  function () {
    // Inizializzazione variabile email
    var emailUtente = document.getElementById('email_utente').value;
    // Ciclo for per iterare l'array listaEmail e controllare se l'email data dall'utente è presente
    for (var i = 0; i < listaEmail.length; i++) {
      if (listaEmail[i] == emailUtente) {
        controlloEmail = true;
      }
    }
    // Stampa risultato del controllo emailUtente
    if (controlloEmail) {
      console.log('Puoi entrare!');
      giocoContainer.className = 'visible';
      // SCRIPT PER IL GIOCO DEI DADI
      // Crea variabili numeri dei dadi
      // Creo evento per lanciare il lancia_dado
      buttonLanciaDado.addEventListener('click',
        function () {
          var numeroGiocatore = document.getElementById('numero_utente').value;
          console.log('Numero giocatore: ' + numeroGiocatore);
          var numeroPc = Math.floor(Math.random() * 6) + 1;
          console.log('Numero generato dal pc: ' + numeroPc);

          // Controllo del vincitore ai dadi
          if (numeroGiocatore > 0 && numeroGiocatore < 7) {
            if (numeroGiocatore > numeroPc) {
              console.log('Ha vinto il giocatore!');
            } else if (numeroGiocatore < numeroPc) {
              console.log('Ha vinto il PC!');
            } else {
              console.log ('Parimerito!!');
            }
          } else {
            alert('Errore: il numero inserito non è valido per il gioco dei dadi.');
            }
        }
    )

    } else {
      console.log('La tua mail non è in lista!');
    }
  }
)
