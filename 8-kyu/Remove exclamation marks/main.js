/*
Title:
Remove exclamation marks

Description:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/


//My Solution:

function removeExclamationMarks(s) {
  return s.includes("!") ? s.replace(/!/g, "") : s;
}