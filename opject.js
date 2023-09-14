// const person = {
//   name: "John",
//   age: 20,
//   pet: {
//     kind: "Rabbit",
//     age: 2,
//   },
// };

// const keyName = "name";

// * Access using dot notation

// console.log("Name: ", person.name);

// * Acceess using bracket notation

// console.log("Name: ", person["name"]);

// console.log("Name: ", person[keyName]);

// * Review Reference Type

// const person2 = person;
// person2.name = "Men";

// console.log("Person1: ", person);
// console.log("Person2: ", person2);

// * Array of object: data from fetching data

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((item, idx) => {
  console.log(
    `Person ${idx + 1} \n Name: ${item.name} \n Age: ${item.age} \n Job: ${
      item.job
    } \n ________________`
  );
});
