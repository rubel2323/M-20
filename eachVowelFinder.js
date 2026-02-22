// Question: Check whether a string contains all the vowels a, e, i, o, u

const vowelContents = "A little dog found on the table";
const vowelWord = ["a", "e", "i", "o", "u"];
const vowelContentsInversion = vowelContents.toLowerCase();
console.log(vowelContentsInversion);

const isConditionFilled = vowelWord.every(function (eachLetter) {
  return vowelContentsInversion.includes(eachLetter);
});

console.log("A little dog found on the table :", isConditionFilled);

// method definitions

// object.function() = method

// every() method rules----

// every() always works on array not on string
// // array.every(function(item) {
//     return condition;
// });

// Parameter is always the receiver — it waits for a value to arrive! 📦😊

//eachLetter is a parameter

//does the STRING contain the LETTER?

//vowelContentsInversion.includes(eachLetter)
// ↑              ↑
// string        letter  ✅
