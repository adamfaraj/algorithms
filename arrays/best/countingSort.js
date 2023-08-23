function countingSort(arr) {
  if (arr.length <= 1) return arr;

  // Find the maximum value in the array
  let max = Math.max(...arr);

  // Initialize the count array with zeros
  let countArray = new Array(max + 1).fill(0);

  // Populate the count array with frequencies of each value in the input array
  for (let i = 0; i < arr.length; i++) {
      countArray[arr[i]]++;
  }

  // Reconstruct the sorted output from the count array
  let outputIndex = 0;
  for (let i = 0; i < countArray.length; i++) {
      while (countArray[i] > 0) {
          arr[outputIndex++] = i;
          countArray[i]--;
      }
  }

  return arr;
}
