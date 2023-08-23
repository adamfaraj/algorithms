/**
 * Insertion Sort:
 * The Insertion Sort algorithm is a simple sorting algorithm that builds
 * the final sorted array one item at a time. It is efficient for small
 * datasets and is often used in practice for its simplicity and effectiveness on small arrays.
 * 
 * Insertion Sort has an average and worst-case time complexity of O(n^2), where n is
 * the number of elements in the array. However, it performs well on small datasets
 * and is often used in practice in combination with other algorithms like QuickSort or
 * MergeSort for more efficient sorting of larger datasets.
 */


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Store the current value to be inserted
    let currentVal = arr[i];

    // Start from the element before the current element
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentVal
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--;
    }

    // Insert the currentVal at its correct position
    arr[j + 1] = currentVal;
  }

  return arr;
}
