const callMe = () => {
  console.log("hello from callBack function")
}

const greeting = (callback) => {
  console.log("hello world")
  callback()
}

greeting(callMe)

// * Annonymous Fuction

function prinMyName() {
  console.log("hello, world from Annonymous fuction")
}

greeting(function () {
  console.log("hello, worold form annonymous function")
})

// * Annonymous Arrow Function

const prinMyName = () => {
  console.log("hello world form annonymous arrow function")
}

greeting(() => {
  console.log("hello world form annonymous arrow function")
})

// * callBack function with parameter

const greeting2 = (callback) => {
  console.log("hello")
  callback("Fern")
}

greeting2(function (name) {
  console.log(`hello from ${name}`)
})

greeting2((name) => {
  console.log(`hello from ${name}`)
})

const originalArr = [1, 2, 3, 4]

// * Normal

const loopThroughArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

loopThroughArray(originalArr)

// * CallBack

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
}

loopThroughArrayV2(originalArr, (item) => {
  console.log(item)
})

// * callback with return

const originalArr1 = [1, 2, 3, 4]

// * normal with no return

const mapArray = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i])
    console.log(newItem)
  }
}

mapArray(originalArr, function (item) {
  return item * 2
})

// * callback with return

const mapArray1 = (arr, cb) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i])
    result.push(newItem)
  }
  return result
}

const newArr = mapArray1(originalArr, function (item) {
  return item * 2
})

console.log(originalArr)
console.log(newArr)

// * Exercise: Create a function called "filterArray" to filter only positive number
// ? 1. This function receive 2 parameters, arr and cb.
// ? 2. cb function must receive 1 parameter, which is each item from the array
// ? 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// ? 4. filterArray must return a new array that keeps all true items

// function filterArray(arr, cb) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const isKeeping = cb(arr[i])
//     result.push(arr[i])
//   }

//   return result
// }

// const beforeFilter = [-1, 3, 20, -24]

// const afterFilter = filterArray(beforeFilter, (item) => {
//   if (item > 0) {
//     return true
//   } else {
//     return false
//   }
//   return item
// })

function filterArray(arr, cb) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i])
    if (isKeeping) {
      result.push(arr[i])
    }
  }
  return result
}

const beforeFilter = [-1, 3, 20, -24]

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0
})

console.log(beforeFilter)
console.log(afterFilter)
