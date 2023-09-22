const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Rabbit",
    age: 2,
  },
}

const keyName = "name"

// * Access using dot notation

console.log("Name: ", person.name)

// * Acceess using bracket notation

console.log("Name: ", person["name"])

console.log("Name: ", person[keyName])

// * Review Reference Type

const person2 = person
person2.name = "Men"

console.log("Person1: ", person)
console.log("Person2: ", person2)

// * Array of object: data from fetching data

const data = [
  {
    name: "John",
    age: 22,
    job: "Software Engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "Web Designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "Marketing",
  },
]

data.forEach((item, idx) => {
  console.log(
    `Person ${idx + 1}
    Name: ${item.name}
    Age: ${item.age}
    Job: ${item.job}
    -------------------`
  )
})

const newData = data.reduce((prev, val, idx) => {
  return `${prev}
  Person ${idx + 1}
  Name: ${val.name}
  Age: ${val.age}
  Job: ${val.job}
  ------------------
  `
}, "")

console.log(newData)
