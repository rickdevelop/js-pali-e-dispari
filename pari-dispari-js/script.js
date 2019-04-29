
var scelte_pari_dispari = ["pari", "dispari"];

var scelta_Utente = prompt("Scegli tra pari o dispari " );

var numero_Utente = parseInt(prompt('Scrivi un numero tra 0 e 5'));


var numero_CPU = Math.floor(Math.random() * 6);

var punteggio = numero_Utente + numero_CPU;

document.write(punteggio);

if (scelta_Utente === scelte_pari_dispari[0] && risultato % 2 === 0) {
  document.write("sei tu il vincitore!");

} else {
  document.write(" la CPU ti ha stracciato!");
}
