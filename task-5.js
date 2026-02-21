let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

//for ...in
for (const object in myObject) {
  console.log("key:", object, "|", "type :", `${typeof myObject[object]}`);
}

// for ...of
const keyMyObject = Object.keys(myObject);
console.log(keyMyObject);

for (const objectType of keyMyObject) {
  console.log(
    "key :",
    objectType,
    "|",
    "type :",
    `${typeof myObject[objectType]}`,
  );
}
//key,value pairs
for (const [key, values] of Object.entries(myObject)) {
  console.log(`key :${key} | type :${typeof values}`);
}
