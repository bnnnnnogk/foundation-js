const grade = (score) => {
  const roundedScore = Math.round(score)

  if (roundedScore >= 0 && roundedScore <= 100) {
    if (roundedScore >= 80) {
      console.log("You got A")
    } else if (roundedScore >= 76 && roundedScore <= 79) {
      console.log("You got B+")
    } else if (roundedScore >= 70 && roundedScore <= 75) {
      console.log("You got B")
    } else if (roundedScore >= 66 && roundedScore <= 69) {
      console.log("You got C+")
    } else if (roundedScore >= 60 && roundedScore <= 65) {
      console.log("You got C")
    } else if (roundedScore >= 56 && roundedScore <= 59) {
      console.log("You got D+")
    } else if (roundedScore >= 50 && roundedScore <= 55) {
      console.log("You got D")
    } else {
      console.log("You got F")
    }
  } else {
    console.log("Error: Score must be between 0 and 100")
  }
}

grade(69.5)
grade(57)
grade(67)
grade(77)
grade(69)
grade(64)
grade(54)
grade(74)
grade(80)
grade(79.5)
grade(-1)
grade(101)
