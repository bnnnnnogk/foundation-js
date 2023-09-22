const normaLloop = () => {
  for (let i = 1; i <= 3; i++) {
    console.log(i, "hello, word!")
    return
  }
}

// * normaLloop();

const reverSeloop = () => {
  for (let i = 3; i >= 0; i--) {
    console.log(i)
  }
}

// * reverSeloop();

const loopThroughArray = () => {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris", "aaaa", "bbbb"]
}

// * normal loop

for (let i = 0; i < tripLocation.length; i++) {
  console.log(tripLocation[i])
}

// * reverse loop through array

for (let i = tripLocation.length - 1; i >= 0; i--) {
  console.log(tripLocation[i])
}

//  *Break loop

for (let i = 0; i < tripLocation.length; i++) {
  if (tripLocation[i] === "Bali") {
    break
  }
  console.log(tripLocation[i])
}

// * Continued loop

for (let i = 0; i < tripLocation.length; i++) {
  if (tripLocation[i] === "Bali") {
    continue
  }
  console.log(tripLocation[i])
}

loopThroughArray()
