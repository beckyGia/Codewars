/*
Title:
Abbreviate a Two Word Name

Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/


//My Solution:

function abbrevName(name){
  let arr = name.split(' ', 2);
  let str = `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`
  return str;
}