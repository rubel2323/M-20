const str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

if (str === reversed) {
  console.log("yes, it is palindrome");
} else {
  console.log("No, it is not");
}
