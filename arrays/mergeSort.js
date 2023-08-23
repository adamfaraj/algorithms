/**
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, 
 * calls itself for the two halves and then merges the two sorted halves.
 * mergeSort(arr): This is the main function that implements the merge sort algorithm.
 * 
 * It takes an array arr as input and recursively divides it into smaller subarrays until
 * the base case is reached (arrays of 0 or 1 elements). It then merges the sorted subarrays using the merge function.
 * merge(left, right): This function takes two sorted arrays left and right as input and merges them into a single sorted array.
 * 
 * It compares elements from the left and right arrays and pushes the smaller element into the result array.
 * After one of the arrays is exhausted, the remaining elements from the other array are simply concatenated to the result array. 
 * 
 * The time complexity of the Merge Sort algorithm is O(n log n), where n is the number of elements in the input array. This makes it more
 * efficient than some other sorting algorithms like Bubble Sort or Insertion Sort, especially for larger arrays.
 * However, Merge Sort does require additional space for creating subarrays and the result array during the merging process.
 * This means that the space complexity of the algorithm is O(n).
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements from both arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}