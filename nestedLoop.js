const nestedLoop = () => {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
    for (let j = 0; j < 3; j++) {
      console.log("j", j);
    }
  }
  // * i 0
  // * j 0
  // * j 1
  // * J 2
  // * i 1
  // * j 0
  // * j 1
  // * j 2
  // * i 2
  // * j 0
  // * j 1
  // * j 2
};

nestedLoop();
