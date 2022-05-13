/*
Title:
Remove String Spaces

Description:
Simple, remove the spaces from the string, then return the resultant string.

*/


//My Solution:

function noSpace(x){
  x = x.replace(/\s+/g, '')
  return x;
}