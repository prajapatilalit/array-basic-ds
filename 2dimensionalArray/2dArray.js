// create two diamensional array of 3*3
let myArray1 = new Array(3);

for (let i = 0; i < 3; i++) {
  myArray1[i] = new Array(3);
}

// myArray1[0][0] = 1;
// myArray1[0][1] = 2;
// myArray1[0][2] = 3;

// myArray1[1][0] = 4;
// myArray1[1][1] = 5;
// myArray1[1][2] = 6;

// myArray1[2][0] = 7;
// myArray1[2][1] = 8;
// myArray1[2][2] = 9;

let start = 1;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    myArray1[i][j] = start;
    start += 1;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    myArray1[i][j];
  }

  console.log(myArray1[i]);
}

// addition of two array
console.log("");
console.log("+");
console.log("");

let myArray2 = new Array(3);

for (let i = 0; i < 3; i++) {
  myArray2[i] = new Array(3);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    start -= 1;
    myArray2[i][j] = start;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    myArray2[i][j];
  }

  console.log(myArray2[i]);
}

console.log("");
console.log("=");
console.log("");

let myArray3 = new Array(3);

for (let i = 0; i < 3; i++) {
  myArray3[i] = new Array(3);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    myArray3[i][j] = myArray1[i][j] + myArray2[i][j];
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    myArray3[i][j];
  }

  console.log(myArray3[i]);
}
