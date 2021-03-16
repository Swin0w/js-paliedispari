//  Una funzione per capire se la parola è palindroma
// L'utente sceglie pari o dispari e un numeroda 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.
  function wordPalindrome(word) {
    var halfword = [];
    var word = prompt("Dammi una parola:");
    var mid = Math.floor(word.length / 2);
    halfword = word;
    var flag = true;
    for (var i=0; i < mid; i++) {
      console.log(word[i], word[word.length - 1 - i]);
      if (word[i] != word[word.length - 1 - i]){
        flag = false;
      }
    }
    return flag;
  }
// CICCIO
  var result = wordPalindrome();
  if (result == true) {
    console.log("Palindroma");
  } else {
    console.log("Non è palindroma");
  }
  do {
    var pariODispari = prompt("Pari o Dispari?:");
  } while (pariODispari == "Pari" || pariODispari == "Dispari");
  var num = parseInt(prompt("Scegli un numero da 1 a 5:"));
  console.log("Giocatore questo è il tuo numero:", num);
  var cpuNum = Math.floor(Math.random(5 - 1) + 1);
  console.log("Questo è il numero del computer:", cpuNum);
  var sum = num + cpuSum;
  if (pariODispari == "Pari"); {
    if (sum % 2 == 0) {
      console.log("Ha vinto il giocatore");
    } else {
      console.log("Ha vinto il computer");
    }
  }
