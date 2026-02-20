const car = {
  name: ["toyota", "prado", "fantan"],
  color: "navy-blue",
  warranty: true,
  seats: 5,
  airconditioner: "25 tons",
  definition: function () {
    return {
      drivingMode: "auto-pilot",
      comfortness: "high",
    };
  },
};
car.name[2] = "Nimbu";
const dreamWish = car.name[2];
console.log(car);
console.log(car.definition().comfortness);
