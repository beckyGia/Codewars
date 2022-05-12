/*
Title:
String repeat

Description:
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/


//My Solution:

function repeatStr (n, s) {
  let repS = s.repeat(n);
   return repS;
 }