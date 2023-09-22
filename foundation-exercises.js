// *Write a function mapRevertSign(arr)

// ? mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.

// todo const arr = [1, -4, 2, 0]
// todo mapRevertSign(arr) // [-1, 4, -2, 0]

const mapRevertSign = (arr) => {
  const a = []

  arr.forEach((elem) => {
    a.push(0 - elem)
  })
  return a
}

const mapRevertSign2 = (arr) => {
  return arr.map((elem) => {
    return 0 - elem
  })
}

// console.log(mapRevertSign2([1, -4, 2, 0]));

// console.log(mapRevertSign([1, -4, 2, 0]));

// * Write a function reverse(arr)

// ? reverse(arr) returns a new array which is arr reversed.

// ! You are not allowed to use Array.reverse method.

// todo const arr = [1, 2, 3, 4, 5]
// todo reverse(arr) // [5, 4, 3, 2, 1]

function reverse(arr) {
  const reversedArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }

  return reversedArr
}

// const arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr([1, 2, 3, 4, 5]))); // [5, 4, 3, 2, 1]

// * Write a function isMember(mem, arr)

// ? isMember(mem, arr) returns a boolean indicating whether mem is a member of arr

// ! Do not use Array helper methods - use a simple for loop

// todo isMember(5, [1, 3, 7, 12]) // false
// todo isMember('john', ['jane', 'jim', 'john']) // true

function isMember(mem, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mem) {
      return true
    }
  }
  return false
}

// console.log(isMember(5, [1, 3, 7, 12])); // false
// console.log(isMember("john", ["jane", "jim", "john"])); // true

// * Write a function unique(arr)

// ? unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.

// ! You can use isMember implemented above.

// todo const arr = [10, 20, 10, 20, 30, 50, 60, 100]

// todo unique(arr) // [10, 20, 30, 50, 60, 100]

function unique(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (!isMember(arr[i], result)) {
      result.push(arr[i])
    }
  }
  return result
}

// console.log(unique([10, 20, 10, 20, 30, 50, 60, 100]));

// * Write a function draw(n)

// ? draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:

// ! Hint: Use nested loop, using assignment operator “+=”, and “\n” which is new line character (read “back-slash-N”)

// todo draw(5)

// todo *****
// todo *****
// todo *****
// todo *****
// todo *****

function draw(n) {
  for (let i = 0; i < n; i++) {
    let line = ""
    for (let j = 0; j < n; j++) {
      line += "*"
    }
    console.log(line)
  }
}

// draw(10);

// * Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:

// ! Hint: Use nested loop, using assignment operator “+=”, and “\n” which is new line character (read “back-slash-N”)

// todo drawNg(5)

// todo *
// todo **
// todo ***
// todo ****
// todo *****

function drawNg(n) {
  for (let i = 1; i <= n; i++) {
    let line = ""

    for (let j = 1; j <= i; j++) {
      line += "*"
    }

    console.log(line)
  }
}

// drawNg(31);

// * Write a function mutual(arr1, arr2)

// ? mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

// todo const class1 = ['Alice', 'Bob', 'John', 'Jane']
// todo const class2 = ['John', 'Foobar', 'Barbaz', 'Foobaz', 'Bob']

// todo console.log(mutual(class1, class2)) // ["John", "Bob"]

function mutual(arr1, arr2) {
  const result = []

  for (let i = 0; i < arr1.length; i++) {
    const member = arr1[i]

    if (arr2.includes(member)) {
      result.push(member)
    }
  }
  return result
}

const class1 = ["Alice", "Bob", "John", "Jane"]
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"]

// console.log(mutual(class1, class2)); // ["John", "Bob"]

// * Write a fizzBuzz(n) function

// ? fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.

// ? If no conditions are met, fizzBuzz(n) prints the element.

// todo fizzBuzz(20)

/* 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

// fizzBuzz(20);

// * Write a GCD function gcd(a, b)

// ? gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

// todo gcd(10, 15) // 5
// todo gcd(18, 12) // 6
// todo gcd(3, 2) // 1

function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

// console.log(gcd(10, 15)); // 5
// console.log(gcd(18, 12)); // 6
// console.log(gcd(3, 2)); // 1

// * Write a function filterLt(n, arr)

// ? filterLt(n, arr) takes in an a number n and an array of numbers arr,
// ? and returns a new array containing all elements of arr that is lesser than (lt) n.

// ! Do not use Array helper methods - use a simple for loop

// todo const arr = [120, 112, 111, 130, 169, 101],

// todo filterLt(0, arr) // []
// todo filterLt(112, arr) // [111, 101]

function filterLt(n, arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      result.push(arr[i])
    }
  }

  return result
}

// const arr = [120, 112, 111, 130, 169, 101];

// console.log(filterLt(0, arr));
// console.log(filterLt(112, arr));

// * Write a function filterGt(n, arr)

// ? filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test

// ! Do not use Array helper methods - use a simple for loop

// todo const arr = [120, 112, 111, 130, 169, 101],

// todo filterGt(0, arr) // [120, 112, 111, 130, 169, 101]
// todo filterGt(112, arr) // [120, 130, 169]

function filterGt(n, arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      result.push(arr[i])
    }
  }

  return result
}

// const arr = [120, 112, 111, 130, 169, 101];
// console.log(filterGt(0, arr)); // [120, 112, 111, 130, 169, 101]
// console.log(filterGt(112, arr)); // [120, 130, 169]
