const boi = " Psychology";
const toi = "psyChology                                     ";
if (boi === toi) {
  console.log("asob boi toi amar valo lage na r");
} else if (boi.toLowerCase().trim() === toi.toLowerCase().trim()) {
  console.log("R valo ki lage ato trim ar case mela j jasce");
} else if (boi.trim() === toi.trim()) {
  console.log("asob boi ar toi melaiya trip kora hoyce");
} else {
  console.log("lekha pora na korle manush hobi kamne");
}
