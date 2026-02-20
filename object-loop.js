const laptop = {
  brand: ["lenovo", "HP", "Dell", "Acer"],
  warranty: true,
  backUp: 10,
  color: "blue",
  screen: "non-touch",
};
const computer = Object.keys(laptop);
console.log(computer);

for (const pc of computer) {
  console.log(pc, ":", laptop[pc]);
}

for (const comp in laptop) {
  console.log(comp, "--", laptop[comp]);
}

const pad = new Object({ rubel: "why not" });
console.log(pad);
const tab = Object.create({ rubel: "no" });
console.log(tab);

console.log("pad:", pad);
console.log("pad.rubel:", pad.rubel);
console.log("tab:", tab);
console.log("tab.rubel:", tab.rubel);
// undefined

var person = {};
person.name = "John";
person.age = 30;
console.log(person);
