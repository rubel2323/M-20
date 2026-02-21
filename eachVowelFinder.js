// Check whether a string contains all the vowels a, e, i, o, u

const vowel = "A little dog found on the table";
const vowelWord = ["a", "e", "i", "o", "u"];
const res = vowel.toLowerCase();
console.log(res);
const finale = vowelWord.every(function (eachLetter) {
  return res.includes(eachLetter);
});
console.log(finale);
// Parameter is always the receiver — it waits for a value to arrive! 📦😊

//does the STRING contain the LETTER?

//res.includes(vowel)
// ↑              ↑
// string        letter  ✅

// // array.every(function(item) {
//     return condition;
// });

// method definitions

// object.function() = method
