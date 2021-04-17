function rightRotations(array, rotation) {
  const rotatedArray = array.concat();
  for (let i = 0; i < rotation; i++) {
    const frontArrayItem = rotatedArray.pop();
    rotatedArray.unshift(frontArrayItem);
  }
  return rotatedArray;
}

const afterRotation = rightRotations([1, 2, 3, 4, 5], 4);
console.log(afterRotation);
