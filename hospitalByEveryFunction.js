const patientForm = ` "Name-John",
  "age :25years old ",
  "His mobile no: 0174... ",
  "Blood Group:A+",
  "email:jh12@gmail.com ",
  "Location:Dhaka " `;

const requiredForm = [
  "name",
  "age",
  "mobile",
  "blood group",
  "email",
  "location",
];

const detailsSearchByLowerCase = patientForm.toLowerCase();

const isCompleted = requiredForm.every(function (details) {
  return detailsSearchByLowerCase.includes(details);
});
console.log("Patient has details : ", isCompleted);
