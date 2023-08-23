function countingSort(arr) {
  // Find the maximum value in the array
  let max = Math.max(...arr);

  // Create a count array
  let count = new Array(max + 1).fill(0);

  // Increment the count array for each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Create an output array
  let output = new Array(arr.length);

  // Iterate over the count array and place the elements in the output array
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      output[j] = i;
    }
  }

  // Return the sorted array
  return output;
}