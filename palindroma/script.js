var palindrome = prompt('scrivi qui la tua parola: ');
var palindrome_reverse;

palindrome_reverse = strReverse(palindrome);
console.log(palindrome , palindrome_reverse)

if (palindrome === palindrome_reverse){
  alert("La stringa "+ palindrome + " la parola è palindroma");
}else {
  alert("La stringa "+ palindrome + " la parola non è palindroma");

}
function strReverse(palindrome) {
  var string_splitted,array_reverse,string_reverse;

  string_splitted = palindrome.split("");

  array_reverse = string_splitted.reverse();

  string_reverse = array_reverse.join("");
  return string_reverse;
}
