function minimumSwaps(arr) {
  let numSwaps = 0;

  for (let i = 0; i < arr.length; i++) {
    while (i + 1 != arr[i]) {
      let swapIndex = arr[i] - 1;
      let valAtIndex = arr[i];
      let valAtSwapIndex = arr[swapIndex];
      arr[i] = valAtSwapIndex;
      arr[swapIndex] = valAtIndex;
      numSwaps++;
    }
  }
  return numSwaps;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
