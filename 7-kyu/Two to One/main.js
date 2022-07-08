/*
Title:
Two to One

Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

//My Solution:

function longest(s1, s2) {
  // your code
  let s3 = s1.concat(s2);
  let arr = [];
  let s4 = s3.split('').sort();
  for (let i = 0; i < s4.length; i++) {
    if (s4[i] !== s4[i-1]) {
      arr.push(s4[i]);
    }
  }
 return arr.join('')
}