function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);

    // Recursively call quickSort with left and right subarrays
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  // Choose the rightmost element as the pivot
  const pivotValue = arr[right];
  let partitionIndex = left;

  // Compare elements and swap them if they are in the wrong order
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr [i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      partitionIndex++;
    }
  }

  // Swap pivotValue with element at partitionIndex
  [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];

  return partitionIndex;
}