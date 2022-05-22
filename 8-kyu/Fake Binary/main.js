/*
Title:
Fake Binary

Description:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/


//My Solution:

function fakeBin(x){
  let y = '';
  for (let i = 0; i<x.length; i++) {
    if (Number(x[i])<5) {y+='0'} else {y+='1'}
  }
  return y
}