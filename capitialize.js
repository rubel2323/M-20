const smallLetter = " i am a good boy";

let result = "";

for (let i = 0; i < smallLetter.length; i++) {
  if (smallLetter[i - 1] === " " || i === 0) {
    result += smallLetter[i].toUpperCase();
  } else {
    result += smallLetter[i];
  }
}
console.log("So ,the letter is : ", result);
