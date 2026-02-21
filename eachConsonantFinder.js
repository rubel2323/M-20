const sentence = "Big dogs can find gold";
const conSonant = ["b", "d", "f", "g", "n", "c", "s", "l"];
const smallLetter = sentence.toLowerCase();

const letterCheck = conSonant.every(function (eachLetter) {
  return smallLetter.includes(eachLetter);
});
console.log(letterCheck);
