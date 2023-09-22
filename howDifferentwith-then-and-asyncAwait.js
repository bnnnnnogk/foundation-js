const fecthData1 = () => Promise.resolve("data1")
const fecthData2 = () => Promise.resolve("data2")
const fecthData3 = () => Promise.resolve("data3")

// * then

fecthData1()
  .then((res) => {
    console.log(res)
    fecthData2()
      .then((res) => {
        console.log(res)
        fecthData3()
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .catch((err) => {
    console.log(err)
  })

// * asyncAwait

const getMultipleData = async () => {
  try {
    const result1 = await fecthData1()
    const result2 = await fecthData2()
    const result3 = await fecthData3()

    console.log(result1)
    console.log(result2)
    console.log(result3)
  } catch (err) {
    console.log(err)
  }
}

getMultipleData()
