const fish = {
  name: "hilsa ilsha",
  size: "55 inch",
  kinds: function () {
    return {
      location: ("chandpur", "mawya"),

      values: 450,
    };
  },
  "fav places": ["sundarbans", "kuakata", "nil nod"],
};
// fish["name"] = "puti";
// fish.size = 65;
const details = "name";
fish[details] = "raj puti";
console.log(fish);
console.log(fish["fav places"]);
console.log(fish.kinds());
