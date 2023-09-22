const fecthData = () => Promise.reject("data not found")

const getData = async () => {
  try {
    const res = await fecthData()

    console.log("yo")
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("done")
  }
}

getData()
