// INIZIO SCRIPT PER IL CONTROLLO DELL'EMAIL

// Dichiarazione variabili
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
// Dichiarazione variabili generali
var buttonInviaEmail = document.getElementById('invio_email');
listaEmail = ['linda@gmail.com', 'alice@gmail.com', 'pippo@gmail.com', 'topolino@gmil.com', 'minnie@gmail.com', 'paperina@gmail.com'];
var controlloEmail = false;
var buttonLanciaDado = document.getElementById('lancia_dado');
var giocoContainer = document.getElementById('gioco_container');
var messaggioEmailErrata = document.getElementById('errore_email');
var risultatoGioco;


// Creo evento per entrare nel gioco se la mail è presente nella lista
buttonInviaEmail.addEventListener('click',
  function () {
    // Dichiarazione variabile email
    var emailUtente = document.getElementById('email_utente').value;
    // Ciclo for per iterare l'array listaEmail e controllare se l'email data dall'utente è presente
    for (var i = 0; i < listaEmail.length; i++) {
      if (listaEmail[i] == emailUtente) {
        controlloEmail = true;
      }
    }
    // Risultato del controllo email utente
    if (controlloEmail) {
      console.log('Puoi entrare!');
      giocoContainer.className = 'visible';
      messaggioEmailErrata.className = 'hidden';

      // SCRIPT PER IL GIOCO DEI DADI

      // Creo evento per lanciare il lancia_dado
      buttonLanciaDado.addEventListener('click',
        function () {

          // Dichiarazione variabili per il gioco
          var numeroGiocatore = document.getElementById('numero_utente').value;
          console.log('Tuo numero' + numeroGiocatore);
          var tuoNumero = document.getElementById('tuo_numero');

          var numeroPc = Math.floor(Math.random() * 6) + 1;
          console.log('Numero PC' + numeroPc);
          var numeroPcDocument = document.getElementById('numero_pc');


          var risutatoDadi = document.getElementById('risultato_dadi');


          // Controllo del vincitore ai dadi
          if (numeroGiocatore > 0 && numeroGiocatore < 7) {
            if (numeroGiocatore > numeroPc) {
              risutatoGioco = 'Hai vinto!!!';
              console.log('hai vinto');
              console.log(risultatoGioco);
            } else if (numeroGiocatore < numeroPc) {
              risutatoGioco = 'Ha vinto il PC!';
              console.log('Ha vinto il PC!');
              console.log(risultatoGioco);
            } else {
              risutatoGioco ='Parimerito!!';
              console.log('Parimerito!');
              console.log(risultatoGioco);
            }

            // Risultato del gioco
            tuoNumero.innerHTML = 'Tuo numero è: ' + numeroGiocatore;
            numeroPcDocument.innerHTML = 'Il numero generato dal PC è:  ' + numeroPc;
            risutatoDadi.innerHTML = 'prova';

          // messaggio errore se l'utente mette un numero non valido per il gioco
          } else {
            alert('Errore: il numero inserito non è valido per il gioco dei dadi.');
            }
        }
    )
    // Messaggio di errore se l'email non è valida
    } else {
      console.log('La tua mail non è in lista!');
      messaggioEmailErrata.className = 'visible';
    }
  }
)
