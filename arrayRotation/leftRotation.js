function leftRotations(array, rotation) {
  const rotatedArray = array.concat();
  for (let i = 0; i < rotation; i++) {
    const frontArrayItem = rotatedArray.shift();
    rotatedArray.push(frontArrayItem);
  }
  return rotatedArray;
}

const afterRotation = leftRotations([1, 2, 3, 4, 5], 2);
console.log(afterRotation);
