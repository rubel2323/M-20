// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const str = "You should open big BOX";

const strLowerCase = str.toLowerCase();
const result = strLowerCase
  .replaceAll("y", "&&&")
  .replaceAll("x", "y")
  .replaceAll("&&&", "x");

console.log(result);
