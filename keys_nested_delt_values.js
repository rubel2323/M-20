const womenHabbits = {
  type: "angry",
  times: "multi-times",
  outlooks: "nice",
  breakingsPeriod: "within a few moments",
  daily: true,
  satisfactory: function () {
    return { values: 30, times: 2 / 3 };
  },
};

const ring = Object.keys(womenHabbits);
console.log(ring);
delete womenHabbits.outlooks;
const obula = womenHabbits.satisfactory().values;
console.log(womenHabbits);
console.log(obula);
console.log(womenHabbits.satisfactory().times);
