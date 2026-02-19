const name1 = "Iama nothing but a simple man";
const name2 = "Yes , dude. You are a lucky man";
const nameJoin1 = ["Habi", "Jabi", "khabi"];
const nameJoin2 = ["nami", "mai", "omi"];
const name12 = "Iam";
const name23 = "aman";
console.log("slice-", name1.slice(2, 5));
console.log("join-", [name1, name2].join("\n")); // join is multiple string arry separator
console.log([nameJoin1, nameJoin2].join(":::"));
const namingAddition = name12.concat(name23);
console.log("concat-", namingAddition);
console.log("Includes -:", namingAddition.includes("x"));
console.log("split- ", name1.split("a"));
