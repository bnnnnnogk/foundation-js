function grade(score) {
  const rounded = Math.round(score);

  if (rounded < 0 || rounded > 100) {
    console.log("Please, enter again!");
    return;
  }

  if (rounded >= 80) {
    console.log("You got A");
  } else if (rounded >= 70) {
    console.log("You got B");
  } else if (rounded >= 60) {
    console.log("You got C");
  } else if (rounded >= 50) {
    console.log("You got C");
  } else {
    console.log("You got F");
  }
}

grade(69.5); // B
grade(99); // A
grade(40); // F
grade(51); // C
grade(49.5); // C
grade(-1); // Error
grade(1001); // Error
