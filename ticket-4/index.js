function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  } else {
  return "E";
  }
}

const grade = getGradeFromPoints(72);
console.log(grade, "should be A");
